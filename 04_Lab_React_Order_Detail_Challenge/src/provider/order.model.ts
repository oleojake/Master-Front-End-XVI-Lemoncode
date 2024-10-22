export interface OrderContextModel {
	orderNumber: string;
	supplier: string;
	date: string;
	totalAmount: number;
	status: number;
	orderDetails: OrderDetails[];
	updatePriceForOneProduct(price: number, id: number): void;
	updateStatusForOneProduct(id: number): void;
	confirmOrder(id: string): void;
}

export interface OrderDetails {
	id: number;
	description: string;
	price: number;
	status: boolean;
}