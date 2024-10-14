import React from "react";
import { Badge, Box } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { CartContext } from "@/provider/cart.context";
import classes from "./shopping-basket-icon.component.module.scss";

export const ShoppingBasketIconComponent: React.FC = () => {
	const { selectedPictures } = React.useContext(CartContext);
	return (
		<>
			{selectedPictures.length > 0 && (
				<Box className={classes.shoppingIcon}>
					<ShoppingBasketIcon color="success" />
					<Badge badgeContent={selectedPictures.length} color="warning"></Badge>
				</Box>
			)}
			{selectedPictures.length === 0 && (
				<Box className={classes.shoppingIcon}>
					<ShoppingBasketIcon className={classes.shoppingIconDisabled} />
					<Badge badgeContent={selectedPictures.length} color="warning"></Badge>
				</Box>
			)}
		</>
	);
};
