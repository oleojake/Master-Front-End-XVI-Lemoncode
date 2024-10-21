import React from "react";
import { Box, Typography } from "@mui/material";
import {
	OrderDynamicInfoComponent,
	OrderStaticInfoComponent,
} from "./components";
import classes from "./order-header.component.module.scss";

export const OrderHeaderComponent: React.FC = () => {
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
		</Box>
	);
};
