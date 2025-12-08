import type { Email } from "@/types";

export const fetchEmails = async () => {
  const response = await fetch('/api/emails');
  const allEmails = await response.json() as Email[];

  return allEmails;
};