import { switchRoutes } from "@/router";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./not-found.component.module.scss";

export const NotFoundComponent: React.FC = () => {
	return (
		<Box className={classes.container}>
			<Typography variant="h5" component="h2" className={classes.title}>
				404 - Page Not Found
			</Typography>
			<Typography variant="body1" component="p">
				Sorry, the page you are looking for does not exist.
			</Typography>
			<Button
				className={classes.button}
				component={Link}
				to={switchRoutes.root}
				color="error"
			>
				Back to Platform
			</Button>
		</Box>
	);
};
