import React from "react";
import { categories } from "@/pods/shop/shop.vm";
import { CartContext } from "@/provider/cart.context";
import { Button, Toolbar } from "@mui/material";
import classes from "./toolbar.component.module.scss";

export const ToolbarComponent: React.FC = () => {
	const { handleFilterChange, filter } = React.useContext(CartContext);
	return (
		<Toolbar className={classes.menuContainer}>
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
		</Toolbar>
	);
};
