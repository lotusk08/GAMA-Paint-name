import { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

interface VoteData {
  suggestions: { [key: string]: { votes: number; voters: string[] } };
  voteHistory: { id: string; voterName: string; brandId: string; brandName: string; timestamp: string }[];
}

const VOTES_FILE = join(process.cwd(), 'api', '.votes.json');

function getVotesData(): VoteData {
  try {
    if (existsSync(VOTES_FILE)) {
      const data = readFileSync(VOTES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading votes file:', e);
  }
  return { suggestions: {}, voteHistory: [] };
}

function saveVotesData(data: VoteData): void {
  try {
    writeFileSync(VOTES_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Error saving votes file:', e);
  }
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const data = getVotesData();
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { brandId, brandName, voterName } = req.body;

    if (!brandId || !brandName || !voterName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = getVotesData();

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

    saveVotesData(data);

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

    const data = getVotesData();

    if (!data.suggestions[brandId]) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    const suggestion = data.suggestions[brandId as string];
    const voters = suggestion.voters as string[];
    const index = voters.indexOf(voterName);

    if (index === -1) {
      return res.status(400).json({ error: 'Voter did not vote for this item' });
    }

    const voters = suggestion.voters as string[];
    voters.splice(index, 1);
    suggestion.votes = voters.length;

    saveVotesData(data);

    return res.status(200).json({
      success: true,
      votes: suggestion.votes,
      voters: suggestion.voters
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
