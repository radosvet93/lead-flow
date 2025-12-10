import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/services/project/fetchProjects";

export const useGetProjects = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  return { data, isLoading, error };
};
