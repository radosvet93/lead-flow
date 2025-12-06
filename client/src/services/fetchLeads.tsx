import type { Lead } from "@/types";

export const fetchLeads = async () => {
  const response = await fetch('/api/leads');
  const allLeads = await response.json() as Lead[];

  return allLeads;
};