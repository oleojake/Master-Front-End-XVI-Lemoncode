import React from "react";
import { PropsWithChildren } from "react";
import { Container, Divider } from "@mui/material";
import { ToolbarComponent } from "./components/toolbar.component";
import classes from "./cart.layout.module.scss";

export const CartLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Container disableGutters maxWidth="xl" className={classes.appContainer}>
			<ToolbarComponent />
			<Divider />
			<Container disableGutters maxWidth="xl">
				{children}
			</Container>
		</Container>
	);
};
