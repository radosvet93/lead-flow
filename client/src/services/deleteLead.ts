export const deleteLead = async (id: string) => {
  const res = await fetch(`/api/leads/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) throw new Error('Failed to delete lead');

  return res.status;
};