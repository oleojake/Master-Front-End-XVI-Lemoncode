import React from "react";
import { PictureInfo } from "@/pods/shop/shop.vm";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./product.component.module.scss";
import { CartContext } from "@/provider/cart.context";

interface ProductComponentProps {
	picture: PictureInfo;
}

export const ProductComponent: React.FC<ProductComponentProps> = (props) => {
	const { picture } = props;
	const { handleSelectPicture } = React.useContext(CartContext);
	return (
		<Box className={classes.productItem}>
			<img src={picture.picUrl} alt={picture.title} />
			<Typography variant="body2" component="p" className={classes.productTitle}>
				{picture.title}
			</Typography>
			<IconButton onClick={() => handleSelectPicture(picture.id)}>
				<DeleteIcon className={classes.deleteIcon} color="error" />
			</IconButton>
		</Box>
	);
};
