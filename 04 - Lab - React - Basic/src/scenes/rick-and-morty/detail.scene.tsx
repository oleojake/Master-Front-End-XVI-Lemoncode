import { RickAndMortyLayout } from "@/layout";
import { RickAndMortyDetailContainer } from "@/pods/rick-and-morty";
import { RickAndMortyListContainer } from "@/pods/rick-and-morty/list";
import React from "react";

export const RickAndMortyDetailScene: React.FC = () => {
	return (
		<RickAndMortyLayout>
			<RickAndMortyDetailContainer />
		</RickAndMortyLayout>
	);
};
