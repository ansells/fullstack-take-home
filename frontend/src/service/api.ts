// TODO: Use OpenAPI generator to generate service and schema

// This is the API as returned by the Django backend
const BASE_URL = 'http://127.0.0.1:8000/team_api'; // TODO: Get this from env

export type ListMembersParams = {
  limit: number;
  offset: number;
};

export type TeamMemberEdit = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role: string;
};

export type TeamMemberResponse = TeamMemberEdit & {
  id: number;
};

export type ListMembersResponse = {
  results: TeamMemberResponse[];
  count: number;
  next: string | null;
  previous: string | null;
};

export type GetMemberParams = {
  id: number;
};

export type UpdadteMemberParams = {
  id: number;
  data: TeamMemberEdit;
};

export type DeleteMemberParams = {
  id: number;
};

class TeamAPI {
  public static async apiFetch(endpoint: string, options: RequestInit = {}) {
    const url = `${BASE_URL}/${endpoint}`;
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(
          `HTTP Error ${response.status}: ${response.statusText}`
        );
      }
      if (response.status === 204) {
        return; // No content
      }
      return await response.json(); // Convert response to JSON
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw error;
    }
  }
  public static async listMembers({
    limit = 1,
    offset = 0,
  }: ListMembersParams): Promise<ListMembersResponse> {
    const response = await TeamAPI.apiFetch(
      `members/?limit=${limit}&offset=${offset}`
    );
    return response as Promise<ListMembersResponse>;
  }
  public static async getMember({
    id,
  }: GetMemberParams): Promise<TeamMemberResponse> {
    const response = await TeamAPI.apiFetch(`members/${id}/`);
    return response as Promise<TeamMemberResponse>;
  }
  public static async createMember(
    data: TeamMemberEdit
  ): Promise<TeamMemberResponse> {
    const response = await TeamAPI.apiFetch('members/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response as Promise<TeamMemberResponse>;
  }
  public static async updateMember({
    id,
    data,
  }: UpdadteMemberParams): Promise<TeamMemberResponse> {
    const response = await TeamAPI.apiFetch(`members/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response as Promise<TeamMemberResponse>;
  }
  public static async deleteMember({ id }: DeleteMemberParams): Promise<void> {
    await TeamAPI.apiFetch(`members/${id}/`, {
      method: 'DELETE',
    });
    return;
  }
}

export default TeamAPI;
