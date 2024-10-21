import React, { useContext } from "react";
import { OrderContext } from "@/provider/order.context";
import {
	Checkbox,
	FormControlLabel,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
} from "@mui/material";
import classes from "./details-table.component.module.scss";

interface DetailsTableProps {
	handlePriceChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		id: number
	) => void;
	handleStatusChange: (id: number) => void;
}

export const DetailsTableComponent: React.FC<DetailsTableProps> = (props) => {
	const { handlePriceChange, handleStatusChange } = props;
	const { orderDetails } = useContext(OrderContext);
	return (
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
	);
};
