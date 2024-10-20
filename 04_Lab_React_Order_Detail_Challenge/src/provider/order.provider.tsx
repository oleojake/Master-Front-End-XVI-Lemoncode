import React from "react";
import { PropsWithChildren } from "react";
import { OrderContext } from "./order.context";

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const context = "context";
	return (
		<OrderContext.Provider
			value={{
				context: context,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
