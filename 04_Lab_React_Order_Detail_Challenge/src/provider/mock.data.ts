import { OrderDetails } from "./order.model";

export const ORDER_NUMBER = "2024101015453";
export const ORDER_SUPPLIER = "EverGreen Logistics";
export const ORDER_DATE = new Date().toLocaleDateString().padStart(10, "0");

export const mockOrderDetails: OrderDetails[] = [
	{
		id: 1,
		description: "EcoFlex Pallet",
		price: 50.25,
		status: false,
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