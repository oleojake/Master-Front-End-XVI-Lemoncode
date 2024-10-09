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
	const [loading, setLoading] = React.useState<boolean>(true);

	React.useEffect(() => {
		getCharacterDetail(id).then((result) => {
			setCharacterDetail(result);
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading && <h2 style={{ color: "#F5F5F5" }}>Loading...</h2>}
			{!loading && <RickAndMortyDetailComponent character={characterDetail} />}
		</>
	);
};
