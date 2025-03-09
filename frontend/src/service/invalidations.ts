import { useQueryClient } from '@tanstack/react-query';

export const invalidateMembers = () => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({ queryKey: ['getMemberList'] });
};

export const invalidateMember = (id: number) => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({ queryKey: ['getMember', { id }] });
};
