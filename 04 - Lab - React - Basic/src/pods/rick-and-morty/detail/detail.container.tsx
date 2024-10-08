import React from "react";
import {
	createDefaultRickAndMortyEntity,
	RickAndMortyDetailEntity,
} from "./detail.vm";
import { useParams } from "react-router-dom";
import { getCharacterDetail } from "./api";
import { RickAndMortyDetailComponent } from "./detail.component";

export const RickAndMortyDetailContainer: React.FC = () => {
	const { id } = useParams();
	const [characterDetail, setCharacterDetail] =
		React.useState<RickAndMortyDetailEntity>(createDefaultRickAndMortyEntity());

	React.useEffect(() => {
		getCharacterDetail(id).then((result) => {
			setCharacterDetail(result);
		});
	}, []);

	return <RickAndMortyDetailComponent character={characterDetail} />;
};
