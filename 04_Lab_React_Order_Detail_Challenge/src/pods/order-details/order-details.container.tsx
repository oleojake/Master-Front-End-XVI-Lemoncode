import React, { useContext } from "react";
import { OrderDetailsComponent } from "./order-details.component";
import { OrderContext } from "@/provider/order.context";

export const OrderDetailsContainer: React.FC = () => {
	const { updatePriceForOneProduct, updateStatusForOneProduct } =
		useContext(OrderContext);

	const handlePriceChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		id: number
	) => {
		const newPrice = Number(e.target.value);
		updatePriceForOneProduct(newPrice, id);
	};

	const handleStatusChange = (id: number) => {
		updateStatusForOneProduct(id);
	};

	return (
		<OrderDetailsComponent
			handlePriceChange={handlePriceChange}
			handleStatusChange={handleStatusChange}
		/>
	);
};
