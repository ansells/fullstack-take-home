import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TeamMemberModel } from './models';
import API from './api';
import { memberResponseToModel, modelToTeamMemberEdit } from './converters';

export const useAddMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (member: TeamMemberModel) => {
      const response = await API.createMember(modelToTeamMemberEdit(member));
      return memberResponseToModel(response);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['getMemberList'] });
    },
  });
};

export const useUpdateMember = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (member: TeamMemberModel) => {
      const response = await API.updateMember({
        id,
        data: modelToTeamMemberEdit(member),
      });
      return memberResponseToModel(response);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['getMemberList'] });
    },
  });
};

export const useDeleteMember = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return API.deleteMember({ id });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['getMemberList'] });
    },
  });
};
