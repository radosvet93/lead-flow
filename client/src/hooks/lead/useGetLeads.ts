import { useQuery } from "@tanstack/react-query";
import { fetchLeads } from "@/services/lead/fetchLeads";

export const useGetLeads = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['leads'],
    queryFn: fetchLeads
  });

  return { data, isLoading, error };
};
