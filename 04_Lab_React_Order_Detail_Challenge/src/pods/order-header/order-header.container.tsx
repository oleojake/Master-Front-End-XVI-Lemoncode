import React, { useContext } from "react";
import { OrderHeaderComponent } from "./order-header.component";
import { OrderContext } from "@/provider/order.context";

export const OrderHeaderContainer: React.FC = () => {
	const { orderDetails } = useContext(OrderContext);
	const validateOrder = (): boolean => {
		return orderDetails.every((order) => order.status === true);
	};
	return <OrderHeaderComponent validateOrder={validateOrder} />;
};
