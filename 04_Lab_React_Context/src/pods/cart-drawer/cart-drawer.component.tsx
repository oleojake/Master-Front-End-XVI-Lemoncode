import React from "react";
import { DesktopDrawer, SwipeableEdgeDrawer } from "./components";

export const CartDrawerComponent: React.FC = () => {
	const isMobile = window.innerWidth < 600;

	return <>{!isMobile ? <DesktopDrawer /> : <SwipeableEdgeDrawer />}</>;
};
