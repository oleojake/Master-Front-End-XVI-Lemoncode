import { generatePath } from "react-router-dom";

interface SwitchRoutes {
	root: string;
	cart: string;
}

export const switchRoutes: SwitchRoutes = {
	root: "/",
	cart: "/cart",
};