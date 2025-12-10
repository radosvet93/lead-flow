import { Router } from "express";
import { getProjectByIdHandler, getProjectsHandler } from "./controller";

export const router = Router();

router.get("/", getProjectsHandler);
router.get("/:id", getProjectByIdHandler);