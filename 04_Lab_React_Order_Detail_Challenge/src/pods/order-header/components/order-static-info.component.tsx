import React from "react";
import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import classes from "./order-static-info.component.module.scss";
import { OrderContext } from "@/provider/order.context";
import dayjs from "dayjs";

export const OrderStaticInfoComponent: React.FC = () => {
	const { orderNumber, supplier, date } = React.useContext(OrderContext);
	return (
		<Box className={classes.orderHeaderRow}>
			<TextField
				variant="outlined"
				label="Order number"
				value={orderNumber}
				disabled
				className={classes.input}
			/>
			<TextField
				variant="outlined"
				label="Supplier"
				value={supplier}
				disabled
				className={classes.input}
			/>
			<DatePicker
				label="Creation date"
				value={dayjs(date, "DD/MM/YYYY")}
				disabled
				className={classes.input}
			/>
		</Box>
	);
};
