import { useQuery } from "@tanstack/react-query";
import type { Project } from "@/components/projects/Projects";

interface SingleProject extends Project {
  leads: {
    id: string,
    name: string,
    createdAt: Date
  }[]
}

export const useGetSingleProject = (id: string) => {
  const fetchProject = async () => {
    const response = await fetch(`/api/projects/${id}`);
    const singleProject = await response.json() as SingleProject;

    return singleProject;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['getProject'],
    queryFn: fetchProject
  });

  return { data, isLoading, error };
};
