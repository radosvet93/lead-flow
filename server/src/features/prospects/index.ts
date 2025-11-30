import { Router, type Response } from "express";
import { listProspects, prospectsSelectSchema } from "./model";

export const router = Router();

router.get("/", async ({ res }: { res: Response }) => {
  const prospectDB = await listProspects();

  const prospectDto = prospectDB.map(row => prospectsSelectSchema.parse({
    id: row.id,
    name: row.name,
    email: row.email,
    status: row.status,
    jobTitle: row.jobTitle,
    company: row.company,
    notes: row.notes,
    createdAt: row.createdAt
  }))

  res.json(prospectDto);
});