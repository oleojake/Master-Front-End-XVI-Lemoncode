import { MemberDetailEntityApi } from "./detail.api-model";

export const getMemberDetail = async (id: string): Promise<MemberDetailEntityApi> => {
	return fetch(`https://api.github.com/users/${id}`).then((response) => response.json());
}