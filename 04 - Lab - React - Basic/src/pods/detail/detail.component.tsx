import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";
import { MemberDetailEntity } from "./detail.vm";

interface DetailComponentProps {
	member: MemberDetailEntity;
	company: string;
}

export const DetailComponent: React.FC<DetailComponentProps> = (props) => {
	const { member, company } = props;

	return (
		<>
			<h2>Hello from Detail page</h2>
			<p> id: {member.id}</p>
			<p> login: {member.login}</p>
			<p> name: {member.name}</p>
			<p> company: {member.company}</p>
			<p> bio: {member.bio}</p>
			<Link to={routes.root} state={{ company: company }}>
				Back to list page
			</Link>
		</>
	);
};
