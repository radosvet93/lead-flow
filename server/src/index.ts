import express, { type Request, type Response } from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { db } from './db';
import { demoUsers } from './schema';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (_req: Request, res: Response) => {
  try {
    await db.insert(demoUsers).values({ name: 'John Doe' });
    const result = await db.select().from(demoUsers);
    res.json({ message: result })
    console.log('Successfully queried the database:', result);
  } catch (error) {
    console.error('Error querying the database:', error);
  }
});

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
}); 
