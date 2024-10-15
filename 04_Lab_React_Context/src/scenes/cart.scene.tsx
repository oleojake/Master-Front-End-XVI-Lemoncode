import { CartLayout } from "@/layout";
import { CartPageContainer } from "@/pods/cart-page";
import React from "react";

export const CartScene: React.FC = () => {
	return (
		<CartLayout>
			<CartPageContainer />
		</CartLayout>
	);
};
