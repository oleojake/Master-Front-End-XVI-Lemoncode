import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import classes from "./product-list.component.module.scss";
import { CartContext } from "@/provider/cart.context";
import { ProductComponent } from "./product.component";
import { Shop } from "@mui/icons-material";
import { ShoppingBasketIconComponent } from "./shopping-basket-icon.component";
import { ProductListHeader } from "./product-list-header.component";

export const ProductList: React.FC = () => {
	const { selectedPictures } = React.useContext(CartContext);

	return (
		<Paper className={classes.cartContainer}>
			<ProductListHeader />
			<Divider />
			<Box className={classes.cartProductList}>
				{selectedPictures.map((picture) => (
					<ProductComponent key={picture.id} picture={picture} />
				))}
			</Box>
		</Paper>
	);
};
