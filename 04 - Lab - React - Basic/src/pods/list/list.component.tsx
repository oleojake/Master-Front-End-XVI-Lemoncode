import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import classes from "./list.component.module.scss";

interface ListComponentProps {
	members: MemberEntity[];
	company: string;
	companyInputRef: React.RefObject<HTMLInputElement>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error: string | null;
}

export const ListComponent: React.FC<ListComponentProps> = (props) => {
	const { members, company, companyInputRef, handleSubmit, error } = props;

	return (
		<>
			<h2>{company} - List page</h2>
			<p>Type your company: </p>
			<form onSubmit={handleSubmit}>
				<input ref={companyInputRef} type="text" placeholder={`Ex: ${company}`} />
				<button type="submit">Search</button>
			</form>

			{error && <div className={classes.error}>{error}</div>}

			{!error && (
				<div className={classes.container}>
					<span className={classes.listHeader}>Avatar</span>
					<span className={classes.listHeader}>Id</span>
					<span className={classes.listHeader}>Name</span>
					{members.map((member) => (
						<React.Fragment key={member.id}>
							<img src={member.avatar_url} />
							<span>{member.id}</span>
							<Link to={routes.detail(company, member.login)} state={{ company }}>
								{member.login}
							</Link>
						</React.Fragment>
					))}
				</div>
			)}
		</>
	);
};
