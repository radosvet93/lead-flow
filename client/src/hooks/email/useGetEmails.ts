import { useQuery } from "@tanstack/react-query";
import { fetchEmails } from "@/services/email/fetchEmails";

export const useGetEmails = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['emails'],
    queryFn: fetchEmails
  });

  return { data, isLoading, error };
};
