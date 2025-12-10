import { ZodError } from "zod";

export function formatZodErrors(error: ZodError) {
  return error.issues.map(issue => ({
    message: issue.message,
    path: issue.path,
  }));
}
