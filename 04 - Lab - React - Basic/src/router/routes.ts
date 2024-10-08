import { generatePath } from "react-router-dom";

interface SwitchRoutes {
	root: string;
	detail: string;
	rickAndMortyList: string;
	rickAndMortyDetail: string;
}

export const switchRoutes: SwitchRoutes = {
	root: "/",
	detail: "/:company/:id",
	rickAndMortyList: "/rick-and-morty",
	rickAndMortyDetail: "/rick-and-morty/:id",
};

interface Routes extends Omit<SwitchRoutes, "detail" | "rickAndMortyDetail"> {
	detail: (company: string, id: string) => string;
	rickAndMortyDetail: (id: string) => string;
}


export const routes: Routes = {
	...switchRoutes,
	detail: (company: string, id: string) => generatePath(switchRoutes.detail, { company, id }),
	rickAndMortyDetail: (id: string) => generatePath(switchRoutes.rickAndMortyDetail, { id }),
};