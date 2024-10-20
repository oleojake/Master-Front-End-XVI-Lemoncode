import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFoundScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={switchRoutes.root} element={<h1>Hi</h1>} />
				<Route path="*" element={<NotFoundScene />} />
			</Routes>
		</Router>
	);
};
