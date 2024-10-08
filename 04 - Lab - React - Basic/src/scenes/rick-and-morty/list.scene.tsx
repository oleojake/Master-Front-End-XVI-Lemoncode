import { RickAndMortyLayout } from "@/layout";
import { RickAndMortyListContainer } from "@/pods/rick-and-morty/list";
import React from "react";

export const RickAndMortyListScene: React.FC = () => {
	return (
		<RickAndMortyLayout>
			<RickAndMortyListContainer />
		</RickAndMortyLayout>
	);
};
