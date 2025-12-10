import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLead } from "@/services/deleteLead";

interface DeleteVars {
  id: string;
  projectId: string;
}

export const useDeleteLead = () => {
  const queryClient = useQueryClient();

  // The DeleteVars is for TS to get the correct projectId in the variables onSuccess
  return useMutation<number, Error, DeleteVars>({
    mutationKey: ['deleteLead'],
    mutationFn: ({ id }: { id: string }) => deleteLead(id),

    onSuccess: async (_, { projectId }) => {
      await queryClient.invalidateQueries({
        queryKey: ['project', projectId],
      });
    },
  });
};