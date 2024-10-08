import React from "react";
import { PropsWithChildren } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import classes from "./rick-and-morty.layout.module.scss";

export const RickAndMortyLayout: React.FC<PropsWithChildren> = ({
	children,
}) => {
	return (
		<Container disableGutters maxWidth="xl" className={classes.appContainer}>
			<Box className={classes.headerContainer}>
				<Typography variant="h4" component="h1" className={classes.title}>
					Rick and Morty's Crew
				</Typography>
			</Box>
			<Divider />
			<Container maxWidth="xl" className={classes.bodyContainer}>
				{children}
			</Container>
		</Container>
	);
};
