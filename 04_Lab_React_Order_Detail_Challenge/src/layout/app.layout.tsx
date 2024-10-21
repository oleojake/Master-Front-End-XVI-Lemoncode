import React from "react";
import { PropsWithChildren } from "react";
import { Container } from "@mui/material";
import classes from "./app.layout.module.scss";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Container disableGutters maxWidth="xl" className={classes.appContainer}>
			{children}
		</Container>
	);
};
