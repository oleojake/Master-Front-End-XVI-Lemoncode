import React from "react";
import { Box, TextField } from "@mui/material";
import classes from "./order-dynamic-info.component.module.scss";
import { OrderContext } from "@/provider/order.context";

export const OrderDynamicInfoComponent: React.FC = () => {
	const { totalAmount, status } = React.useContext(OrderContext);
	return (
		<Box className={classes.orderHeaderRow}>
			<TextField
				variant="outlined"
				label="Total amount"
				value={`${totalAmount.toFixed(2)} €`}
				className={classes.input}
			/>
			<TextField
				variant="outlined"
				label="Status"
				value={`${status.toFixed(0)} %`}
				className={classes.input}
			/>
		</Box>
	);
};
