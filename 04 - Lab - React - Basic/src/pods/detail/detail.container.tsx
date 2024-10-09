import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { DetailComponent } from "./detail.component";
import { createDefaultMemberDetail, MemberDetail } from "./detail.vm";
import { getMemberDetail } from "./api/detail.repository";

export const DetailContainer: React.FC = () => {
	const { id } = useParams();
	const location = useLocation();
	const [memberDetail, setMemberDetail] = React.useState<MemberDetail>(
		createDefaultMemberDetail()
	);
	const [loading, setLoading] = React.useState<boolean>(true);

	React.useEffect(() => {
		getMemberDetail(id).then((memberDetail) => {
			setMemberDetail(memberDetail);
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading && <h2>Loading...</h2>}
			{!loading && (
				<DetailComponent member={memberDetail} company={location.state?.company} />
			)}
		</>
	);
};
