import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
	OrderDynamicInfoComponent,
	OrderStaticInfoComponent,
} from "./components";
import classes from "./order-header.component.module.scss";
import { OrderContext } from "@/provider/order.context";

export const OrderHeaderComponent: React.FC = () => {
	const { orderDetails } = useContext(OrderContext);
	const validateOrder = (): boolean => {
		return orderDetails.every((order) => order.status === true);
	};
	return (
		<Box className={classes.orderHeaderContainer}>
			<Box className={classes.orderHeaderTitle}>
				<Typography variant="h4" component="h1">
					Supplier Order
				</Typography>
			</Box>
			<Box className={classes.orderHeaderContent}>
				<OrderStaticInfoComponent />
				<OrderDynamicInfoComponent />
			</Box>
			<Button
				variant="contained"
				size="small"
				color="success"
				disabled={!validateOrder()}
				className={classes.validateButton}
			>
				Validate Order
			</Button>
		</Box>
	);
};
