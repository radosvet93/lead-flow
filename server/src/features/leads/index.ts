import { Router, type Response } from "express";
import { leadsSelectSchema, listLeads } from "./model";

export const router = Router();

router.get("/", async ({ res }: { res: Response }) => {
  const leadDB = await listLeads();

  const leadDto = leadDB.map(row => leadsSelectSchema.parse({
    id: row.id,
    name: row.name,
    email: row.email,
    status: row.status,
    jobTitle: row.jobTitle,
    company: row.company,
    notes: row.notes,
    projectId: row.projectId,
    createdAt: row.createdAt
  }))

  res.json(leadDto);
});