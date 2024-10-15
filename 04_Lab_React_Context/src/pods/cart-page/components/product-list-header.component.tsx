import { CartContext } from "@/provider/cart.context";
import { Box, Typography } from "@mui/material";
import React from "react";
import { ShoppingBasketIconComponent } from "./shopping-basket-icon.component";
import classes from "./product-list-header.component.module.scss";

export const ProductListHeader: React.FC = () => {
	const { selectedPictures } = React.useContext(CartContext);

	return (
		<>
			{selectedPictures.length === 0 && (
				<Box className={classes.cartHeader}>
					<Typography className={classes.emptyCart}>
						<h2>Your cart is empty</h2>
					</Typography>
					<ShoppingBasketIconComponent />
				</Box>
			)}
			{selectedPictures.length > 0 && (
				<Box className={classes.cartHeader}>
					<Typography className={classes.cartTitle}>
						<h2>Your cart</h2>
					</Typography>
					<ShoppingBasketIconComponent />
				</Box>
			)}
		</>
	);
};
