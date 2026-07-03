import express, { Express, Request, Response } from 'express';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.VOTE_SERVER_PORT || 3001;
const VOTES_FILE = join(process.cwd(), 'votes.json');

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Initialize votes data structure
interface VoteData {
  suggestions: { [key: string]: { votes: number; voters: string[] } };
  voteHistory: { id: string; voterName: string; brandId: string; brandName: string; timestamp: string }[];
}

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

// Routes

// GET all votes
app.get('/api/votes', (req: Request, res: Response) => {
  const data = getVotesData();
  res.json(data);
});

// POST a vote
app.post('/api/votes', (req: Request, res: Response) => {
  const { brandId, brandName, voterName } = req.body;

  if (!brandId || !brandName || !voterName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const data = getVotesData();

  // Initialize suggestion if not exists
  if (!data.suggestions[brandId]) {
    data.suggestions[brandId] = { votes: 0, voters: [] };
  }

  // Check if this voter has already voted for this brand
  if (!data.suggestions[brandId].voters.includes(voterName)) {
    data.suggestions[brandId].voters.push(voterName);
    data.suggestions[brandId].votes++;
  }

  // Add to vote history
  data.voteHistory.push({
    id: `${Date.now()}-${Math.random()}`,
    voterName,
    brandId,
    brandName,
    timestamp: new Date().toISOString(),
  });

  saveVotesData(data);
  res.json({
    success: true,
    votes: data.suggestions[brandId].votes,
  });
});

// DELETE a vote (unvote)
app.delete('/api/votes/:brandId', (req: Request, res: Response) => {
  const { brandId } = req.params;
  const { voterName } = req.body;

  if (!voterName) {
    return res.status(400).json({ error: 'Missing voterName' });
  }

  const data = getVotesData();

  if (data.suggestions[brandId]) {
    const index = data.suggestions[brandId].voters.indexOf(voterName);
    if (index > -1) {
      data.suggestions[brandId].voters.splice(index, 1);
      data.suggestions[brandId].votes--;
    }
  }

  saveVotesData(data);
  res.json({ success: true });
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[SERVER] Vote API running on http://localhost:${PORT}`);
});

server.on('error', (err: any) => {
  if (err.code === 'EADDRINUSE') {
    const altPort = parseInt(PORT as string) + 1;
    console.log(`[SERVER] Port ${PORT} in use, trying ${altPort}...`);
    app.listen(altPort, '0.0.0.0', () => {
      console.log(`[SERVER] Vote API running on http://localhost:${altPort}`);
    });
  }
});
