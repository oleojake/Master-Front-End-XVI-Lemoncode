import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { DetailComponent } from "./detail.component";
import { createDefaultMemberDetail, MemberDetailEntity } from "./detail.vm";
import { getMemberDetail } from "./detail.repository";

export const DetailContainer: React.FC = () => {
	const { id } = useParams();
	const location = useLocation();
	const [memberDetail, setMemberDetail] = React.useState<MemberDetailEntity>(
		createDefaultMemberDetail()
	);

	React.useEffect(() => {
		getMemberDetail(id).then((memberDetail) => setMemberDetail(memberDetail));
	}, []);

	return (
		<>
			<DetailComponent member={memberDetail} company={location.state?.company} />
		</>
	);
};
