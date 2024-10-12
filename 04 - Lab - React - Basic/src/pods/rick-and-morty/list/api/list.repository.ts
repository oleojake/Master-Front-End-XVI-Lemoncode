import { RickAndMortyEntity } from "../list.vm";
import {
	getCharacterCollection as getCharacterCollectionApi,
	getCharacterCollectionFilteredByName as getCharacterCollectionFilteredByNameApi
} from "./list.api";
import { RickAndMortyEntityApi } from "./list.api-model";
import { mapCharacterCollectionFromApiToVm } from "./list.mapper";

export const getCharacterCollection = (): Promise<RickAndMortyEntity[]> => {
	return new Promise<RickAndMortyEntity[]>((resolve, reject) => {
		getCharacterCollectionApi()
			.then((result: RickAndMortyEntityApi[]) => {
				const mappedMembers = mapCharacterCollectionFromApiToVm(result);
				resolve(mappedMembers);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const getCharacterCollectionFilteredByName = (name: string): Promise<RickAndMortyEntity[]> => {
	return new Promise<RickAndMortyEntity[]>((resolve, reject) => {
		getCharacterCollectionFilteredByNameApi(name)
			.then((result: RickAndMortyEntityApi[]) => {
				const mappedMembers = mapCharacterCollectionFromApiToVm(result);
				resolve(mappedMembers);
			})
			.catch((error) => {
				reject(error);
			});
	});
};