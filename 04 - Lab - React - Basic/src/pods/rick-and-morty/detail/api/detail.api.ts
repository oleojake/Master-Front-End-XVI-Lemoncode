import { RickAndMortyDetailEntityApi } from "./detail-api-model";

export const getCharacterById = async (id: string): Promise<RickAndMortyDetailEntityApi> => {
	return fetch(`https://rickandmortyapi.com/api/character/${id}`)
		.then((response) => response.json());
}

export const getEpisodeName = async (episodeUrl: string): Promise<string> => {
	return fetch(episodeUrl)
		.then((response) => response.json())
		.then((data) => data.name);
};