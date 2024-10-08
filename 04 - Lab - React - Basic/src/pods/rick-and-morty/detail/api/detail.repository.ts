import { RickAndMortyDetailEntity } from "../detail.vm";
import { getCharacterById } from "./detail.api";
import { mapCharacterFromApiToVm } from "./detail.mapper";

export const getCharacterDetail = (id: string): Promise<RickAndMortyDetailEntity> => {
	return new Promise<RickAndMortyDetailEntity>((resolve) => {
		getCharacterById(id).then((result) => {
			resolve(mapCharacterFromApiToVm(result));
		});
	});
};