import React from "react";
import { RickAndMortyEntity } from "./list.vm";
import { SearchBarComponent } from "./components/searchbar.component";
import { Box, Button } from "@mui/material";
import { routes } from "@/router";
import { Link } from "react-router-dom";
import { CharacterComponent } from "./components/character.component";
import CachedIcon from "@mui/icons-material/Cached";
import classes from "./list.component.module.scss";

interface RickAndMortyComponentProps {
	characters: RickAndMortyEntity[];
	reloadCharacters: () => void;
	inputRef: React.RefObject<HTMLInputElement>;
	error: string | null;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const RickAndMortyComponent: React.FC<RickAndMortyComponentProps> = (
	props
) => {
	const {
		characters,
		inputRef: characterInputRef,
		reloadCharacters,
		error,
		setFilter,
	} = props;
	return (
		<>
			<SearchBarComponent
				inputRef={characterInputRef}
				error={error}
				placeholder="Search by character..."
				setFilter={setFilter}
			/>
			<Box className={classes.buttonsArea}>
				<Button
					component={Link}
					to={routes.root}
					variant="contained"
					color="warning"
				>
					Bring me back, please!
				</Button>
				<Button variant="contained" color="primary" onClick={reloadCharacters}>
					<CachedIcon />
				</Button>
			</Box>
			{characters.length === 0 && <h2 style={{ color: "#F5F5F5" }}>Loading...</h2>}
			<Box className={classes.listContainer}>
				{characters.map((character) => (
					<CharacterComponent character={character} key={character.id} />
				))}
			</Box>
		</>
	);
};
