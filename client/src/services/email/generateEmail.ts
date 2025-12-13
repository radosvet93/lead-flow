import ky from 'ky';
import type { GenerateEmailPayload } from "@/types";

export const generateEmail = async (payload: GenerateEmailPayload) =>
  await ky.post<{ email: string }>('/api/emails/generate', {
    json: payload,
    timeout: false, // false = infinite timeout
  }).json();