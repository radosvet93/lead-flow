import type { Project } from '@/types';

export const fetchProjects = async () => {
  const response = await fetch('/api/projects');
  const allProjects = await response.json() as Project[];

  return allProjects;
};