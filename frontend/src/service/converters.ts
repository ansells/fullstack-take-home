import { ListMembersResponse, TeamMemberEdit, TeamMemberResponse } from './api';
import { Role, TeamMemberModel, TeamMemberListModel } from './models';

export function memberResponseToModel(
  response: TeamMemberResponse
): TeamMemberModel {
  const {
    id,
    first_name: firstName,
    last_name: lastName,
    email,
    phone_number: phoneNumber,
    role: roleStr,
  } = response;
  const role: Role = Role[roleStr as keyof typeof Role] || Role.REGULAR;
  return {
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    role,
  };
}

export function memberListResponseToModel(
  page: number,
  pageSize: number,
  response: ListMembersResponse
): TeamMemberListModel {
  const { results, count: totalMembers } = response;
  const totalPages = Math.ceil(totalMembers / pageSize);

  return {
    members: results.map(memberResponseToModel),
    totalMembers,
    page,
    totalPages,
  };
}

export function modelToTeamMemberEdit(member: TeamMemberModel): TeamMemberEdit {
  const {
    firstName: first_name,
    lastName: last_name,
    email,
    phoneNumber: phone_number,
    role,
  } = member;
  return {
    first_name,
    last_name,
    email,
    phone_number,
    role,
  };
}
