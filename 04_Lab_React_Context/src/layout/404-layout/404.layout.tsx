import React from "react";
import { PropsWithChildren } from "react";
import { Container, Divider } from "@mui/material";
import classes from "./404.layout.module.scss";
import { ToolbarComponent } from "./components/toolbar.component";

export const Layout404: React.FC<PropsWithChildren> = ({ children }) => {
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
