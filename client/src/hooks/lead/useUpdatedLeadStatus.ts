import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Lead, ProjectLeads } from '@/types';
import { patchLeadStatus } from '@/services/lead/patchLeadStatus';

export const useUpdateLeadStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['updateStatusLead'],
    mutationFn: ({ id, status }: { id: string; status: Lead['status'] }) => patchLeadStatus(id, status),

    onSuccess: updatedLead => {
      queryClient.setQueryData<ProjectLeads>(
        ['project', updatedLead.projectId],
        (old) => {
          if (!old) return old;

          return {
            ...old,
            leads: old.leads.map((lead) =>
              lead.id === updatedLead.id ? updatedLead : lead
            ),
          };
        }
      );
    },
  });
};
