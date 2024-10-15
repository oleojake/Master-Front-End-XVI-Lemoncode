import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartScene, NotFoundScene, ShopScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={switchRoutes.root} element={<ShopScene />} />
				<Route path={switchRoutes.cart} element={<CartScene />} />
				<Route path="*" element={<NotFoundScene />} />
			</Routes>
		</Router>
	);
};
