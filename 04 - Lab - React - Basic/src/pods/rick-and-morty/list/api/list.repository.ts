import { RickAndMortyEntity } from "../list.vm";
import { getCharacterCollection as getCharacterCollectionApi } from "./list.api";
import { RickAndMortyEntityApi } from "./list.api-model";
import { mapCharacterCollectionFromApiToVm } from "./list.mapper";

export const getCharacterCollection = (name?: string): Promise<RickAndMortyEntity[]> => {
	return new Promise<RickAndMortyEntity[]>((resolve, reject) => {
		getCharacterCollectionApi(name)
			.then((result: RickAndMortyEntityApi[]) => {
				const mappedMembers = mapCharacterCollectionFromApiToVm(result);
				resolve(mappedMembers);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
