import React from "react";
import { Box, Typography } from "@mui/material";
import classes from "./product-list.component.module.scss";
import { CartContext } from "@/provider/cart.context";
import { ProductComponent } from "./product.component";

export const ProductList: React.FC = () => {
	const { selectedPictures } = React.useContext(CartContext);

	return (
		<Box className={classes.cartContainer}>
			{selectedPictures.length === 0 && (
				<Typography variant="h6">
					Get your daily dose of feline awesomeness...
				</Typography>
			)}
			{selectedPictures.length > 0 && (
				<Typography variant="h6">Products in Cart</Typography>
			)}
			<Box className={classes.cartProductList}>
				{selectedPictures.map((picture) => (
					<ProductComponent key={picture.id} picture={picture} />
				))}
			</Box>
		</Box>
	);
};
