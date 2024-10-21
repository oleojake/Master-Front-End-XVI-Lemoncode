export interface OrderContextModel {
	orderNumber: string;
	supplier: string;
	date: string;
	totalAmount: number;
	status: number;
	orderDetails: OrderDetails[];
	updatePriceForOneProduct(price: number, id: number): void;
	updateStatusForOneProduct(id: number): void;
}

export interface OrderDetails {
	id: number;
	description: string;
	price: number;
	status: boolean;
}

export const mockOrderDetails: OrderDetails[] = [
	{
		id: 1,
		description: "EcoFlex Pallet",
		price: 50.25,
		status: true,
	},
	{
		id: 2,
		description: "GreenShield Packaging Wrap",
		price: 25.49,
		status: false,
	},
	{
		id: 3,
		description: "NatureFlow Cargo Crates",
		price: 150.99,
		status: true,
	},
];