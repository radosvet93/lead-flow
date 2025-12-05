import { eq } from "drizzle-orm";
import { db } from "../../db/setup";
import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';

export const projectsTable = pgTable("projects", {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow()
});

export const projectsSelectSchema = createSelectSchema(projectsTable)

export const projectById = (id: string) => db.select().from(projectsTable).where(eq(projectsTable.id, id));
export const listProjects = () => db.select().from(projectsTable)
