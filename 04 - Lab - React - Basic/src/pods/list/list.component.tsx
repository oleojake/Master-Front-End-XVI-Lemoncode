import React from "react";
import { MemberEntity } from "./list.vm";
import { SearchBarComponent } from "./components/searchbar.component";
import { UserListComponent } from "./components/userlist.component";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import RickAndMortyIcon from "@/public/rick-and-morty.svg";

interface ListComponentProps {
	members: MemberEntity[];
	company: string;
	inputRef: React.RefObject<HTMLInputElement>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error: string | null;
}

export const ListComponent: React.FC<ListComponentProps> = (props) => {
	const {
		members,
		company,
		inputRef: companyInputRef,
		handleSubmit,
		error,
	} = props;

	return (
		<>
			<SearchBarComponent
				inputRef={companyInputRef}
				handleSubmit={handleSubmit}
				error={error}
				placeholder="Search by company..."
			/>
			<Button
				component={Link}
				to={routes.rickAndMortyList}
				variant="contained"
				color="success"
			>
				<RickAndMortyIcon
					width="1.6em"
					height="1.6em"
					style={{ marginRight: "8px" }}
				/>
				Buurp?
			</Button>
			<UserListComponent members={members} company={company} error={error} />
		</>
	);
};
