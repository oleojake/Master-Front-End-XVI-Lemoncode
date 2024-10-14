import React from "react";
import { PropsWithChildren } from "react";
import { Box, Button, Container, Divider, IconButton } from "@mui/material";
import classes from "./shop.layout.module.scss";
import { CartContext } from "@/provider/cart.context";
import { categories } from "@/pods/shop/shop.vm";

export const ShopLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const { handleFilterChange, filter } = React.useContext(CartContext);
	return (
		<Container disableGutters maxWidth="xl" className={classes.appContainer}>
			<Box className={classes.menuContainer}>
				<Button
					color="primary"
					variant={filter === categories.all ? "contained" : "text"}
					onClick={() => handleFilterChange(categories.all)}
				>
					All
				</Button>
				<Button
					color="primary"
					variant={filter === categories.cat ? "contained" : "text"}
					onClick={() => handleFilterChange(categories.cat)}
				>
					Kitties
				</Button>
				<Button
					color="primary"
					variant={filter === categories.dog ? "contained" : "text"}
					onClick={() => handleFilterChange(categories.dog)}
				>
					Puppies
				</Button>
			</Box>
			<Divider />
			<Container disableGutters maxWidth="xl">
				{children}
			</Container>
		</Container>
	);
};
