import React from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import classes from "./product-list.component.module.scss";
import { CartContext } from "@/provider/cart.context";
import { ProductComponent } from "./product.component";
import { ProductListHeader } from "./product-list-header.component";

export const ProductList: React.FC = () => {
	const { selectedPictures, emptyAllCart } = React.useContext(CartContext);

	return (
		<Paper className={classes.cartContainer}>
			<ProductListHeader />
			<Divider />
			<Box className={classes.cartProductList}>
				{selectedPictures.map((picture) => (
					<ProductComponent key={picture.id} picture={picture} />
				))}
				{selectedPictures.length > 0 && (
					<Button color="error" onClick={emptyAllCart}>
						Empty all cart
					</Button>
				)}
			</Box>
		</Paper>
	);
};