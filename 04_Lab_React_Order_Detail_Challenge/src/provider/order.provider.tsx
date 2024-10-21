import React from "react";
import { PropsWithChildren } from "react";
import { OrderContext } from "./order.context";
import { mockOrderDetails, OrderDetails } from "./order.model";
import {
	getStatusPercentage,
	getTotalAmount,
	getTotalAmountProductsConfirmed,
	updatePrice,
	updateStatus,
} from "./order.helper";

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [totalAmount, setTotalAmount] = React.useState<number>(
		getTotalAmountProductsConfirmed(mockOrderDetails)
	);
	const [status, setStatus] = React.useState<number>(
		getStatusPercentage(mockOrderDetails)
	);
	const [orderDetails, setOrderDetails] =
		React.useState<OrderDetails[]>(mockOrderDetails);

	const updatePriceForOneProduct = (newPrice: number, id: number) => {
		const updatedOrdersDetails = updatePrice(orderDetails, newPrice, id);
		setOrderDetails(updatedOrdersDetails);
		const totalAmount = getTotalAmount(orderDetails);
		setTotalAmount(totalAmount);
	};

	const updateStatusForOneProduct = (id: number) => {
		const updatedOrdersDetails = updateStatus(orderDetails, id);
		setOrderDetails(updatedOrdersDetails);
		const status = getStatusPercentage(orderDetails);
		setStatus(status);
	};

	const updateTotalAmount = () => {
		const totalAmount = getTotalAmount(orderDetails);
		setTotalAmount(totalAmount);
	};

	const updateStatusPercentage = () => {
		const status = getStatusPercentage(orderDetails);
		setStatus(status);
	};

	return (
		<OrderContext.Provider
			value={{
				orderNumber: "2024101015453",
				supplier: "EverGreen Logistics",
				date: new Date().toLocaleDateString().padStart(10, "0"),
				totalAmount,
				status,
				orderDetails,
				updatePriceForOneProduct,
				updateStatusForOneProduct,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
