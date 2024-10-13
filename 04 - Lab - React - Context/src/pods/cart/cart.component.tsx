import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import classes from "./cart.component.module.scss";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CartContext } from "@/provider/cart.context";
import { ProductList } from "./components/product-list.component";
import { ShoppingBasket } from "@mui/icons-material";
import { ShoppingBasketIconComponent } from "./components/shopping-basket-icon.component";

export const CartComponent: React.FC = () => {
	const { open, handleDrawerOpen, handleDrawerClose, selectedPictures } =
		React.useContext(CartContext);

	return (
		<MuiDrawer
			anchor="right"
			variant="permanent"
			className={`${classes.drawer} ${
				open ? classes.drawerOpen : classes.drawerClose
			}`}
			classes={{
				paper: `${classes.drawerPaper} ${
					open ? classes.drawerOpen : classes.drawerClose
				}`,
			}}
		>
			<Box className={classes.drawerHeader}>
				{open ? (
					<IconButton onClick={handleDrawerClose}>
						<ChevronRightIcon />
					</IconButton>
				) : (
					<IconButton onClick={handleDrawerOpen}>
						<ChevronLeftIcon />
					</IconButton>
				)}
			</Box>
			{open && <ProductList />}
			{!open && <ShoppingBasketIconComponent />}
		</MuiDrawer>
	);
};
