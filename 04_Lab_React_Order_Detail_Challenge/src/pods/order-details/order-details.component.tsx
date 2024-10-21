import React, { useContext } from "react";
import {
	Box,
	Checkbox,
	FormControlLabel,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import classes from "./order-details.component.module.scss";
import { OrderContext } from "@/provider/order.context";

interface OrderDetailsProps {
	handlePriceChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		id: number
	) => void;
	handleStatusChange: (id: number) => void;
}

export const OrderDetailsComponent: React.FC<OrderDetailsProps> = (props) => {
	const { handlePriceChange, handleStatusChange } = props;
	const { orderNumber, orderDetails } = useContext(OrderContext);
	return (
		<Box className={classes.orderHeaderContainer}>
			<Box className={classes.orderHeaderTitle}>
				<Typography variant="h6" component="h2">
					Order Details: #{orderNumber}
				</Typography>
			</Box>
			<TableContainer className={classes.orderHeaderContent}>
				<Table>
					<TableHead>
						<TableRow className={classes.tableHeader}>
							<TableCell className={classes.tableColumn}>Status</TableCell>
							<TableCell className={classes.tableColumn}>Product Name</TableCell>
							<TableCell className={classes.tableColumn}>Amount</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{orderDetails.map((orderDetail) => (
							<TableRow key={orderDetail.description}>
								<TableCell>
									{orderDetail.status ? (
										<FormControlLabel
											control={<Checkbox checked color="success" />}
											label="Confirmed"
											className={classes.tableCellConfirmed}
											onChange={() => handleStatusChange(orderDetail.id)}
										/>
									) : (
										<FormControlLabel
											control={<Checkbox color="warning" />}
											label="Pending"
											className={classes.tableCellPending}
											onChange={() => handleStatusChange(orderDetail.id)}
										/>
									)}
								</TableCell>
								<TableCell>{orderDetail.description}</TableCell>
								<TableCell>
									<TextField
										variant="outlined"
										label="Amount €"
										size="small"
										type="number"
										value={orderDetail.price}
										onChange={(e) => handlePriceChange(e, orderDetail.id)}
										disabled={orderDetail.status}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};
