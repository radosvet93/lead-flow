import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createLead } from '@/services/lead/createLead';
import type { CreateLeadPayload } from '@/types';

export const useCreateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createLead'],
    mutationFn: (payload: CreateLeadPayload) => createLead(payload),

    onSuccess: async (newLead) => {
      await queryClient.invalidateQueries({
        queryKey: ['project', newLead.projectId],
      });
    },
  });
};
