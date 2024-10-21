import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import classes from "./order-details.component.module.scss";
import { OrderContext } from "@/provider/order.context";
import { DetailsTableComponent } from "./components";

interface OrderDetailsProps {
	handlePriceChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		id: number
	) => void;
	handleStatusChange: (id: number) => void;
}

export const OrderDetailsComponent: React.FC<OrderDetailsProps> = (props) => {
	const { handlePriceChange, handleStatusChange } = props;
	const { orderNumber } = useContext(OrderContext);
	return (
		<Box className={classes.orderHeaderContainer}>
			<Box className={classes.orderHeaderTitle}>
				<Typography variant="h6" component="h2">
					Order Details: #{orderNumber}
				</Typography>
			</Box>
			<DetailsTableComponent
				handlePriceChange={handlePriceChange}
				handleStatusChange={handleStatusChange}
			/>
		</Box>
	);
};
