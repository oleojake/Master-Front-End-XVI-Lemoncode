import React from "react";
import { PropsWithChildren } from "react";
import { OrderContext } from "./order.context";
import { mockOrderDetails, OrderDetails } from "./order.model";
import {
	getStatusPercentage,
	getTotalAmountProductsConfirmed,
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
		const updatedOrderDetails = [...orderDetails];
		updatedOrderDetails.map((orderDetail) => {
			if (orderDetail.id === id) {
				orderDetail.price = newPrice;
			}
		});
		setOrderDetails(updatedOrderDetails);
	};

	const updateStatusForOneProduct = (id: number) => {
		const updatedOrderDetails = [...orderDetails];
		updatedOrderDetails.map((orderDetail) => {
			if (orderDetail.id === id) {
				orderDetail.status = !orderDetail.status;
			}
		});
		setOrderDetails(updatedOrderDetails);
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
				updatePriceForOneProduct: updatePriceForOneProduct,
				updateStatusForOneProduct: updateStatusForOneProduct,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
