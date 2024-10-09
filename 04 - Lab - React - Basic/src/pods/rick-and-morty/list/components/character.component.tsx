import React from "react";
import { RickAndMortyEntity } from "../list.vm";
import { Box } from "@mui/material";
import classes from "./character.component.module.scss";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface CharacterComponentProps {
	character: RickAndMortyEntity;
}

export const CharacterComponent: React.FC<CharacterComponentProps> = (
	props
) => {
	const { character } = props;

	return (
		<>
			<Box
				className={classes.characterCard}
				component={Link}
				to={routes.rickAndMortyDetail(character.id)}
			>
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
				</Box>
			</Box>
		</>
	);
};
