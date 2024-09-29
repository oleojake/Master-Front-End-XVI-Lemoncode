import { MemberDetailEntity } from "./detail.vm";
import { getMemberDetail as getMemberDetailApi } from "./api";
import { mapMemberFromApiToVm } from "./detail.mapper";

export const getMemberDetail = (
	id: string
): Promise<MemberDetailEntity> => {
	return new Promise<MemberDetailEntity>((resolve) => {
		getMemberDetailApi(id).then((result) => {
			resolve(mapMemberFromApiToVm(result));
		});
	});
};