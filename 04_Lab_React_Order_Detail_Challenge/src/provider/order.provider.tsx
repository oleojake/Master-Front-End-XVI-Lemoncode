import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { OrderContext } from "./order.context";
import { OrderDetails } from "./order.model";
import {
	getStatusPercentage,
	getTotalAmount,
	getTotalAmountProductsConfirmed,
	updatePrice,
	updateStatus,
} from "./order.helper";
import {
	mockOrderDetails,
	ORDER_DATE,
	ORDER_NUMBER,
	ORDER_SUPPLIER,
} from "./mock.data";
import { orderConfirmedSnackBar } from "./snackbar/snackbar.helper";

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [orderDetails, setOrderDetails] = React.useState<OrderDetails[]>([
		...mockOrderDetails,
	]);

	const [totalAmount, setTotalAmount] = React.useState<number>(
		getTotalAmountProductsConfirmed(orderDetails)
	);
	const [status, setStatus] = React.useState<number>(
		getStatusPercentage(orderDetails)
	);

	const updatePriceForOneProduct = (newPrice: number, id: number) => {
		const updatedOrdersDetails = updatePrice(orderDetails, newPrice, id);
		setOrderDetails(updatedOrdersDetails);
	};

	const updateStatusForOneProduct = (id: number) => {
		const updatedOrdersDetails = updateStatus(orderDetails, id);
		setOrderDetails(updatedOrdersDetails);
	};

	const confirmOrder = (id: string) => {
		orderConfirmedSnackBar(id);
		setOrderDetails([...mockOrderDetails]);
	};

	useEffect(() => {
		const totalAmount = getTotalAmount(orderDetails);
		setTotalAmount(totalAmount);
	}, [orderDetails]);

	useEffect(() => {
		const status = getStatusPercentage(orderDetails);
		setStatus(status);
	}, [orderDetails]);

	return (
		<OrderContext.Provider
			value={{
				orderNumber: ORDER_NUMBER,
				supplier: ORDER_SUPPLIER,
				date: ORDER_DATE,
				totalAmount,
				status,
				orderDetails,
				updatePriceForOneProduct,
				updateStatusForOneProduct,
				confirmOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
