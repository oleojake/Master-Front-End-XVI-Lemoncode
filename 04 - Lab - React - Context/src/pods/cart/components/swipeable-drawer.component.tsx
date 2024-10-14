import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ProductList, ShoppingBasketIconComponent } from "./components/";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
	height: "100%",
	backgroundColor: grey[100],
	...theme.applyStyles("dark", {
		backgroundColor: theme.palette.background.default,
	}),
}));

const StyledBox = styled("div")(({ theme }) => ({
	backgroundColor: "#fff",
	...theme.applyStyles("dark", {
		backgroundColor: grey[800],
	}),
}));

const Puller = styled("div")(({ theme }) => ({
	width: 30,
	height: 6,
	backgroundColor: grey[300],
	borderRadius: 3,
	position: "absolute",
	top: 8,
	left: "calc(50% - 15px)",
	...theme.applyStyles("dark", {
		backgroundColor: grey[900],
	}),
}));

export const SwipeableEdgeDrawer: React.FC = () => {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	return (
		<Root>
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
				<StyledBox
					sx={{
						position: "absolute",
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: "visible",
						right: 0,
						left: 0,
					}}
				>
					<Puller />
					<Box sx={{ p: 2 }}>
						<ShoppingBasketIconComponent />
					</Box>
				</StyledBox>
				<ProductList />
			</SwipeableDrawer>
		</Root>
	);
};
