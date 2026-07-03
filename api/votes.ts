import { VercelRequest, VercelResponse } from '@vercel/node';

interface VoteData {
  suggestions: { [key: string]: { votes: number; voters: string[] } };
  voteHistory: { id: string; voterName: string; brandId: string; brandName: string; timestamp: string }[];
}

// For development, use in-memory store
let votesCache: VoteData | null = null;

async function getVotesData(): Promise<VoteData> {
  // Return cached data if available
  if (votesCache) {
    return votesCache;
  }

  // Try to initialize from environment variable
  try {
    if (process.env.GAMA_VOTES_DATA) {
      votesCache = JSON.parse(process.env.GAMA_VOTES_DATA);
      return votesCache;
    }
  } catch (e) {
    console.error('Error parsing votes from env:', e);
  }

  votesCache = { suggestions: {}, voteHistory: [] };
  return votesCache;
}

async function saveVotesData(data: VoteData): Promise<void> {
  votesCache = data;
  // In production with Vercel KV, save here
  // For now, this persists in memory during the function lifecycle
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const data = await getVotesData();
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { brandId, brandName, voterName } = req.body;

    if (!brandId || !brandName || !voterName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await getVotesData();

    if (!data.suggestions[brandId]) {
      data.suggestions[brandId] = { votes: 0, voters: [] };
    }

    const suggestion = data.suggestions[brandId];

    // Check if voter already voted
    if (suggestion.voters.includes(voterName)) {
      return res.status(400).json({ error: 'Already voted for this item' });
    }

    suggestion.voters.push(voterName);
    suggestion.votes = suggestion.voters.length;

    // Add to vote history
    data.voteHistory.push({
      id: `vote_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      voterName,
      brandId,
      brandName,
      timestamp: new Date().toISOString()
    });

    await saveVotesData(data);

    return res.status(200).json({
      success: true,
      votes: suggestion.votes,
      voters: suggestion.voters
    });
  }

  if (req.method === 'DELETE') {
    const { brandId } = req.query;
    const { voterName } = req.body;

    if (!brandId || !voterName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await getVotesData();

    if (!data.suggestions[brandId as string]) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    const suggestion = data.suggestions[brandId as string];
    const voters = suggestion.voters as string[];
    const index = voters.indexOf(voterName);

    if (index === -1) {
      return res.status(400).json({ error: 'Voter did not vote for this item' });
    }

    voters.splice(index, 1);
    suggestion.votes = voters.length;

    await saveVotesData(data);

    return res.status(200).json({
      success: true,
      votes: suggestion.votes,
      voters: suggestion.voters
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
