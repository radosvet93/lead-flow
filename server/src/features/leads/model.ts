import { db } from "../../db/setup";
import { pgTable, text, uuid, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';
import { projectsTable } from "../projects/model";
import { eq } from "drizzle-orm";

export const statusEnum = pgEnum("status", ["new", "contacted", "interested", "declined", "closed"]);

export const leadsTable = pgTable("leads", {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name'),
  company: text('company'),
  jobTitle: text('job_title'),
  status: statusEnum('status').default('new'),
  notes: text('notes'),
  projectId: uuid('project_id')
    .notNull()
    .references(() => projectsTable.id, { onDelete: "cascade" }),
  createdAt: timestamp('created_at').defaultNow()
});

export const leadsSelectSchema = createSelectSchema(leadsTable)

export const listLeads = () => db.select().from(leadsTable)

export const listLeadsByProject = (projectId: string) => db.select()
  .from(leadsTable)
  .where(eq(leadsTable.projectId, projectId));
