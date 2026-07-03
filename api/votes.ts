import { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

interface VoteData {
  suggestions: { [key: string]: { votes: number; voters: string[] } };
  voteHistory: { id: string; voterName: string; brandId: string; brandName: string; timestamp: string }[];
}

// Lazy initialize Redis client
let redis: Redis | null = null;

function getRedisClient(): Redis {
  if (!redis && process.env.REDIS_URL) {
    redis = new Redis({
      url: process.env.REDIS_URL
    });
  }
  return redis!;
}

const VOTES_KEY = 'gama:votes:data';
const VOTE_HISTORY_KEY = 'gama:votes:history';

async function getVotesData(): Promise<VoteData> {
  try {
    if (!process.env.REDIS_URL) {
      console.log('[v0] No REDIS_URL set, returning empty data');
      return { suggestions: {}, voteHistory: [] };
    }
    
    const client = getRedisClient();
    const votesJson = await client.get(VOTES_KEY);
    const historyJson = await client.get(VOTE_HISTORY_KEY);
    
    console.log('[v0] Redis read - votesJson type:', typeof votesJson, 'historyJson type:', typeof historyJson);
    
    const suggestions = votesJson ? JSON.parse(votesJson as string) : {};
    const voteHistory = historyJson ? JSON.parse(historyJson as string) : [];
    
    return { suggestions, voteHistory };
  } catch (error) {
    console.error('[v0] Error reading from Redis:', error);
    return { suggestions: {}, voteHistory: [] };
  }
}

async function saveVotesData(data: VoteData): Promise<void> {
  try {
    if (!process.env.REDIS_URL) {
      console.log('[v0] No REDIS_URL set, skipping save');
      return;
    }
    
    const client = getRedisClient();
    const votesStr = JSON.stringify(data.suggestions);
    const historyStr = JSON.stringify(data.voteHistory);
    
    console.log('[v0] Saving to Redis - suggestions count:', Object.keys(data.suggestions).length);
    
    await client.set(VOTES_KEY, votesStr);
    await client.set(VOTE_HISTORY_KEY, historyStr);
    
    console.log('[v0] Successfully saved to Redis');
  } catch (error) {
    console.error('[v0] Error writing to Redis:', error);
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
    // Debug check
    if (req.query.debug === 'true') {
      try {
        const client = getRedisClient();
        const testKey = 'test:key:' + Date.now();
        await client.set(testKey, 'test value');
        const testVal = await client.get(testKey);
        await client.del(testKey);
        
        return res.status(200).json({
          REDIS_URL_EXISTS: !!process.env.REDIS_URL,
          REDIS_URL_PREFIX: process.env.REDIS_URL?.substring(0, 30) || 'NOT SET',
          REDIS_TEST: 'passed',
          TEST_VALUE: testVal
        });
      } catch (err) {
        return res.status(200).json({
          REDIS_URL_EXISTS: !!process.env.REDIS_URL,
          REDIS_TEST: 'failed',
          ERROR: (err as Error).message
        });
      }
    }
    
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
