import { switchRoutes } from "@/router";
import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./cart-page.component.module.scss";
import { ProductList } from "./components/product-list.component";

export const CartPageComponent: React.FC = () => {
	return (
		<Box className={classes.container}>
			<ProductList />
			<Button
				className={classes.button}
				component={Link}
				to={switchRoutes.root}
				variant="contained"
				color="primary"
			>
				Back to Shop
			</Button>
		</Box>
	);
};
