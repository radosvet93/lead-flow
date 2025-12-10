import type { CreateLeadPayload, Lead } from "@/types";

export const createLead = async (payload: CreateLeadPayload) => {
  const res = await fetch(`/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Failed to create lead');

  return await res.json() as Promise<Lead>;
};