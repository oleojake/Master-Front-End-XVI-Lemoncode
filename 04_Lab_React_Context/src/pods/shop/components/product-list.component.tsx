import React from "react";
import { CartContext } from "@/provider/cart.context";
import classes from "./product-list.component.module.scss";
import { Box } from "@mui/material";
import { ProductComponent } from "./product.component";

export const ProductListComponent: React.FC = () => {
	const { pictures, filter } = React.useContext(CartContext);

	return (
		<Box className={classes.productListContainer}>
			{pictures
				.filter((picture) => filter === "all" || picture.category === filter)
				.map((picture) => (
					<ProductComponent key={picture.id} picture={picture} />
				))}
		</Box>
	);
};
