import { AppLayout } from "@/layout";
import { OrderDetailsContainer, OrderHeaderContainer } from "@/pods";

import React from "react";

export const OrderScene: React.FC = () => {
	return (
		<AppLayout>
			<OrderHeaderContainer />
			<OrderDetailsContainer />
		</AppLayout>
	);
};
