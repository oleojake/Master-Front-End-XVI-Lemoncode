import { CartContext } from "@/provider/cart.context";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ShoppingBasketIconComponent } from "./shopping-basket-icon.component";
import classes from "./product-list-header.component.module.scss";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/router";

export const ProductListHeader: React.FC = () => {
	const { selectedPictures } = React.useContext(CartContext);

	return (
		<>
			{selectedPictures.length === 0 && (
				<Box className={classes.cartHeader}>
					<Typography variant="h6">
						Get your daily dose of feline awesomeness...
					</Typography>
					<ShoppingBasketIconComponent />
				</Box>
			)}
			{selectedPictures.length > 0 && (
				<Box className={classes.cartHeader}>
					<Typography variant="h6">Products in Cart</Typography>
					<Button
						className={classes.button}
						component={Link}
						to={switchRoutes.cart}
						variant="contained"
						color="warning"
						size="small"
					>
						Checkout
					</Button>
				</Box>
			)}
		</>
	);
};
