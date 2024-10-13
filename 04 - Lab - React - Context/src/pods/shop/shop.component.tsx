import { Box } from "@mui/material";
import React from "react";
import classes from "./shop.component.module.scss";
import { CartContext } from "@/provider/cart.context";
import { ProductListComponent } from "./components/product-list.component";

export const ShopComponent: React.FC = () => {
	const { open } = React.useContext(CartContext);

	return (
		<Box
			className={`${classes.mainContent} ${
				open ? classes.mainContentOpen : classes.mainContentClose
			}`}
		>
			<ProductListComponent />
		</Box>
	);
};
