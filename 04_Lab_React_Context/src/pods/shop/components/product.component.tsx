import React from "react";
import { PictureInfo } from "../shop.vm";
import { Box, Typography } from "@mui/material";
import classes from "./product.component.module.scss";
import { ProductButton } from "./product-button.component";

interface ProductProps {
	picture: PictureInfo;
}

export const ProductComponent: React.FC<ProductProps> = (props) => {
	const { picture } = props;
	return (
		<Box className={classes.product}>
			<img src={picture.picUrl} alt={picture.title} />
			<Typography component="p" variant="body1">
				{picture.title}
			</Typography>
			<ProductButton pictureId={picture.id} pictureSelected={picture.selected} />
		</Box>
	);
};
