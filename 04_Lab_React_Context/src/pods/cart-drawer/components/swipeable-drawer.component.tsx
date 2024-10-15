import * as React from "react";
import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ProductList, ShoppingBasketIconComponent } from "./components";
import styles from "./swipeable-drawer.component.module.scss";

const drawerBleeding = 56;

export const SwipeableEdgeDrawer: React.FC = () => {
	const [open, setOpen] = React.useState(true);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	return (
		<div className={styles.root}>
			<CssBaseline />
			<Global
				styles={{
					".MuiDrawer-root > .MuiPaper-root": {
						height: `calc(50% - ${drawerBleeding}px)`,
						overflow: "visible",
					},
				}}
			/>
			<SwipeableDrawer
				anchor="bottom"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				swipeAreaWidth={drawerBleeding}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}
			>
				<div
					className={styles.styledBox}
					style={{
						position: "absolute",
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: "visible",
						right: 0,
						left: 0,
					}}
				>
					<div className={styles.puller} />
					<Box sx={{ p: 2 }}>
						<ShoppingBasketIconComponent />
					</Box>
				</div>
				<div className={styles.scrollableProductList}>
					<ProductList />
				</div>
			</SwipeableDrawer>
		</div>
	);
};
