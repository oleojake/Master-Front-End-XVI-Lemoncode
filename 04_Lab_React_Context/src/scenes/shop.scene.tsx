import { ShopLayout } from "@/layout";
import { CartDrawerContainer } from "@/pods/cart-drawer";
import { ShopContainer } from "@/pods/shop";
import React from "react";

export const ShopScene: React.FC = () => {
	return (
		<ShopLayout>
			<ShopContainer />
			<CartDrawerContainer />
		</ShopLayout>
	);
};
