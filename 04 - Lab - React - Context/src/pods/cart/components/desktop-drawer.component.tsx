import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import { Box, IconButton } from "@mui/material";
import { ProductList, ShoppingBasketIconComponent } from "./components/";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import classes from "./desktop-drawer.component.module.scss";
import { CartContext } from "@/provider/cart.context";

export const DesktopDrawer: React.FC = () => {
	const { open, handleDrawerOpen, handleDrawerClose } =
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
