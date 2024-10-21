import { OrderDetails } from "./order.model";

export const getTotalAmountProductsConfirmed = (orderDetails: OrderDetails[]): number => {
	const getTotal = orderDetails.reduce((acc, orderDetail) => {
		if (orderDetail.status) {
			return acc + orderDetail.price;
		}
		return acc;
	}, 0);
	return getTotal;
}

export const getTotalAmount = (orderDetails: OrderDetails[]): number => {
	const getTotal = orderDetails.reduce((acc, orderDetail) => {
		return acc + orderDetail.price;
	}, 0);
	return getTotal;
}

export const getStatusPercentage = (orderDetails: OrderDetails[]): number => {
	const totalProducts = orderDetails.length;
	const totalProductsConfirmed = orderDetails.reduce((acc, orderDetail) => {
		if (orderDetail.status) {
			return acc + 1;
		}
		return acc;
	}, 0);
	return Math.round((totalProductsConfirmed / totalProducts) * 100);
}

export const updatePrice = (orderDetails: OrderDetails[], newPrice: number, id: number): OrderDetails[] => {
	const updatedOrderDetails = [...orderDetails];
	updatedOrderDetails.map((orderDetail) => {
		if (orderDetail.id === id) {
			orderDetail.price = newPrice;
		}
	});
	return updatedOrderDetails;
}

export const updateStatus = (orderDetails: OrderDetails[], id: number): OrderDetails[] => {
	const updatedOrderDetails = [...orderDetails];
	updatedOrderDetails.map((orderDetail) => {
		if (orderDetail.id === id) {
			orderDetail.status = !orderDetail.status;
		}
	});
	return updatedOrderDetails;
}