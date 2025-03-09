// TODO: Use OpenAPI generator to generate service and schema
export enum Role {
  ADMIN = 'ADMIN',
  REGULAR = 'REGULAR',
}

export type TeamMemberModel = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: Role;
};

export type TeamMemberListModel = {
  members: TeamMemberModel[];
  totalMembers: number;
  page: number;
  totalPages: number;
};
