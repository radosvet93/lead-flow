import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { router as projectsRouter } from './features/projects';
import { router as leadsRouter } from './features/leads'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/projects", projectsRouter);
app.use("/api/leads", leadsRouter);

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
}); 
