import { RickAndMortyEntityApi } from "./list.api-model";

const get10RandomCharacters = (totalCharacters: number): number[] => {
	const randomCharacters = [];
	for (let i = 0; i < 10; i++) {
		randomCharacters.push(Math.floor(Math.random() * totalCharacters));
	}
	return randomCharacters;
};

export const getEpisodeName = async (episodeUrl: string): Promise<string> => {
	return fetch(episodeUrl)
		.then((response) => response.json())
		.then((data) => data.name);
};

export const getCharacterCollection = async (): Promise<RickAndMortyEntityApi[]> => {
	const url = `https://rickandmortyapi.com/api/character`;
	return fetch(url)
		.then((response) => response.json())
		.then((data1) => {
			const totalCharacters = data1.info.count;
			return fetch(
				`https://rickandmortyapi.com/api/character/[${get10RandomCharacters(
					totalCharacters
				)}]`
			);
		})
		.then((response) => response.json())
		.then((data2) => data2);
};

export const getCharacterCollectionFilteredByName = async (name: string): Promise<RickAndMortyEntityApi[]> => {
	const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
	return fetch(url)
		.then((response) => response.json())
		.then((data) => data.results);
};
