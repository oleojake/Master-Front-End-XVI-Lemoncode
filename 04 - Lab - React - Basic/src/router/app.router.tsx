import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ListScene,
	DetailScene,
	NotFoundScene,
	RickAndMortyListScene,
	RickAndMortyDetailScene,
} from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={switchRoutes.root} element={<ListScene />} />
				<Route path={switchRoutes.detail} element={<DetailScene />} />
				<Route
					path={switchRoutes.rickAndMortyList}
					element={<RickAndMortyListScene />}
				/>
				<Route
					path={switchRoutes.rickAndMortyDetail}
					element={<RickAndMortyDetailScene />}
				/>
				<Route path="*" element={<NotFoundScene />} />
			</Routes>
		</Router>
	);
};
