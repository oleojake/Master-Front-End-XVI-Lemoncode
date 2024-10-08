import React from "react";
import { RickAndMortyDetailEntity } from "./detail.vm";
import { Box, Button } from "@mui/material";
import classes from "./detail.component.module.scss";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface RickAndMortyDetailComponentProps {
	character: RickAndMortyDetailEntity;
}

export const RickAndMortyDetailComponent: React.FC<
	RickAndMortyDetailComponentProps
> = (props) => {
	const { character } = props;
	return (
		<Box className={classes.characterCard}>
			<img src={character.image} alt={character.name} />
			<Box className={classes.characterInfo}>
				<h2 className={classes.characterName}>{character.name}</h2>
				<p className={classes.characterStatus}>
					<span
						className={classes.characterStatusIcon}
						style={{
							backgroundColor:
								character.status === "Alive"
									? "#55CC44"
									: character.status === "Dead"
									? "#D63D2E"
									: "gray",
						}}
					></span>
					{character.status} - {character.species}
				</p>
				<p className={classes.characterInfoTitle}>Last known location:</p>
				<p className={classes.characterLocation}>{character.location}</p>
				<p className={classes.characterInfoTitle}>First seen in:</p>
				<p className={classes.characterLocation}>{character.episode}</p>
				<Button
					className={classes.button}
					component={Link}
					to={routes.rickAndMortyList}
					variant="contained"
					color="warning"
				>
					Back to list page
				</Button>
			</Box>
		</Box>
	);
};
