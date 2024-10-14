import { ShopLayout } from "@/layout";
import { CartContainer } from "@/pods/cart";
import { ShopContainer } from "@/pods/shop";
import { Box } from "@mui/material";
import React from "react";

export const ShopScene: React.FC = () => {
	return (
		<ShopLayout>
			<ShopContainer />
			<CartContainer />
		</ShopLayout>
	);
};
