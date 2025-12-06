import { useQuery } from "@tanstack/react-query";
import { fetchProject } from "@/services/fetchProject";

export const useGetSingleProject = (id: string) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getProject'],
    queryFn: () => fetchProject(id)
  });

  return { data, isLoading, error };
};
