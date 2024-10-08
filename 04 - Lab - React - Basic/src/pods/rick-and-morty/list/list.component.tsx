import React from "react";
import { RickAndMortyEntity } from "./list.vm";
import { SearchBarComponent } from "../../list/components/searchbar.component";
import { Box, Button } from "@mui/material";
import { routes } from "@/router";
import { Link } from "react-router-dom";
import { CharacterComponent } from "./components/character.component";
import classes from "./list.component.module.scss";

interface RickAndMortyComponentProps {
	characters: RickAndMortyEntity[];
	inputRef: React.RefObject<HTMLInputElement>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error: string | null;
}

export const RickAndMortyComponent: React.FC<RickAndMortyComponentProps> = (
	props
) => {
	const { characters, inputRef: characterInputRef, handleSubmit, error } = props;
	return (
		<>
			<SearchBarComponent
				inputRef={characterInputRef}
				handleSubmit={handleSubmit}
				error={error}
				placeholder="Search by character..."
			/>
			<Button
				component={Link}
				to={routes.root}
				variant="contained"
				color="warning"
			>
				Bring me back, please!
			</Button>
			<Box className={classes.listContainer}>
				{characters.map((character) => (
					<CharacterComponent character={character} key={character.id} />
				))}
			</Box>
		</>
	);
};
