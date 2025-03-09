import { useQuery } from '@tanstack/react-query';
import API from './api';
import { memberListResponseToModel, memberResponseToModel } from './converters';

const DEFAULT_PAGE_SIZE = 10;

type UseMemberParams = {
  page: number;
  pageSize?: number;
};

export function useMemberList({
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
}: UseMemberParams) {
  const offset = (page - 1) * pageSize;
  const limit = pageSize;
  const { data, ...resp } = useQuery({
    queryFn: async () => {
      return API.listMembers({ offset, limit });
    },
    queryKey: ['getMemberList', { page }],
  });
  return {
    ...resp,
    data: data && memberListResponseToModel(page, pageSize, data),
  };
}
export function useMember({ id }: { id: number }) {
  const { data, ...resp } = useQuery({
    queryFn: async () => {
      return API.getMember({ id });
    },
    queryKey: ['getMember', { id }],
  });
  return {
    ...resp,
    data: data && memberResponseToModel(data),
  };
}
