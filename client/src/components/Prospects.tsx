import { useQuery } from "@tanstack/react-query";

interface Prospect {
  id: string;
  email: string;
  name: string | null;
  company: string | null;
  jobTitle: string | null;
  status: string | null;
  notes: string | null;
  createdAt: string | null;
};

const Prospects = () => {
  const { isPending, error, data } = useQuery<Prospect[], Error>({
    queryKey: ['getProspects'],
    queryFn: async () => {
      const response = await fetch('/api/prospects');
      const data = await response.json() as Prospect[];

      return data;
    },
  });

  if (isPending) return 'Loading...';

  if (error) return 'Something went wrong';

  return JSON.stringify(data, null, 2);
};

export default Prospects;