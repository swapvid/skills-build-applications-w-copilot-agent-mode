import express from 'express';
import db from './config/database.js';

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV || 'development' });
});

app.get('/', (_req, res) => {
  res.send('OctoFit Tracker backend is running');
});

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`);
});
