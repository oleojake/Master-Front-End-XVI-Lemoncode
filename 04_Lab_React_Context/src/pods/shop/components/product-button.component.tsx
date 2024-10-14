import React from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./product-button.component.module.scss";
import { CartContext } from "@/provider/cart.context";

interface ProductButtonProps {
	pictureId: string;
	pictureSelected: boolean;
}

export const ProductButton: React.FC<ProductButtonProps> = (props) => {
	const { pictureId, pictureSelected } = props;
	const { handleSelectPicture } = React.useContext(CartContext);
	return (
		<>
			{pictureSelected ? (
				<Button
					variant="contained"
					color="success"
					onClick={() => handleSelectPicture(pictureId)}
				>
					Product added
				</Button>
			) : (
				<Button
					variant="outlined"
					color="success"
					onClick={() => handleSelectPicture(pictureId)}
				>
					<ShoppingCartIcon className={classes.cartIcon} />
					Add to cart
				</Button>
			)}
		</>
	);
};
