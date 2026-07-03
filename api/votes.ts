import { VercelRequest, VercelResponse } from '@vercel/node';
import { put, get } from '@vercel/blob';

interface VoteData {
  suggestions: { [key: string]: { votes: number; voters: string[] } };
  voteHistory: { id: string; voterName: string; brandId: string; brandName: string; timestamp: string }[];
}

const VOTES_BLOB_PATH = 'gama-votes/votes-data.json';

async function getVotesData(): Promise<VoteData> {
  try {
    let blob;
    try {
      blob = await get(VOTES_BLOB_PATH);
    } catch (getError) {
      // get() throws BlobNotFoundError when blob doesn't exist
      console.log('[v0] Blob not found, returning empty:', (getError as any).message);
      return { suggestions: {}, voteHistory: [] };
    }
    
    if (!blob) {
      console.log('[v0] No votes blob found, returning empty');
      return { suggestions: {}, voteHistory: [] };
    }
    
    // blob is a Web Blob, need to read it as text
    const text = await (blob as any).text();
    const data = JSON.parse(text) as VoteData;
    console.log('[v0] Loaded votes from blob:', Object.keys(data.suggestions).length, 'items');
    return data;
  } catch (error) {
    console.error('[v0] Error reading votes blob:', error);
    return { suggestions: {}, voteHistory: [] };
  }
}

async function saveVotesData(data: VoteData): Promise<void> {
  try {
    const jsonStr = JSON.stringify(data);
    console.log('[v0] Saving votes to blob:', Object.keys(data.suggestions).length, 'items', 'path:', VOTES_BLOB_PATH);
    
    const result = await put(VOTES_BLOB_PATH, jsonStr, {
      contentType: 'application/json',
      access: 'private',
      overwrite: true
    });
    
    console.log('[v0] Successfully saved votes to blob, url:', result.url);
  } catch (error) {
    const err = error as any;
    console.error('[v0] Error saving votes blob:', err.message, 'code:', err.code, 'full:', JSON.stringify(error));
    throw error;
  }
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

    try {
      await saveVotesData(data);
    } catch (saveError) {
      console.error('[v0] Failed to save after vote:', saveError);
      return res.status(500).json({ error: 'Failed to save vote', details: (saveError as Error).message });
    }

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
