import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import classes from "./order-details.component.module.scss";
import { OrderContext } from "@/provider/order.context";
import { DetailsTableComponent } from "./components";

export const OrderDetailsComponent: React.FC = () => {
	const { orderNumber } = useContext(OrderContext);
	return (
		<Box className={classes.orderHeaderContainer}>
			<Box className={classes.orderHeaderTitle}>
				<Typography variant="h6" component="h2">
					Order Details: #{orderNumber}
				</Typography>
			</Box>
			<DetailsTableComponent />
		</Box>
	);
};
