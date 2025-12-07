import { Router, type Response, type Request } from "express";
import { listProjects, projectById, projectsSelectSchema } from "./model";
import { leadsSelectSchema, listLeadsByProject } from "../leads/model";
import { countEmailsByProject } from "../emails/model";

export const router = Router();

router.get("/", async ({ res }: { res: Response }) => {
  const projectDB = await listProjects();

  const projectDto = projectDB.map(row => projectsSelectSchema.parse({
    id: row.id,
    name: row.name,
    description: row.description,
    createdAt: row.createdAt
  }))

  res.json(projectDto);
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = req.params.id;
    const projectDB = await projectById(id);

    if (!projectDB.length) {
      return res.status(404).json({ error: "Project not found" });
    }

    const projectDto = projectsSelectSchema.parse({
      id: projectDB[0].id,
      name: projectDB[0].name,
      description: projectDB[0].description,
      createdAt: projectDB[0].createdAt
    })

    const leadsDB = await listLeadsByProject(id);

    if (!leadsDB.length) {
      return res.status(404).json({ error: "List of leads not found" });
    }

    const leadsDto = leadsDB.map(row => leadsSelectSchema.parse({
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

    const leadsDtoWithoutProjectId = leadsDto.map(({ projectId, ...rest }) => rest);

    const [{ count: emailCount }] = await countEmailsByProject(id);

    return res.json({
      ...projectDto,
      leads: leadsDtoWithoutProjectId,
      emailCount
    });

  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
});