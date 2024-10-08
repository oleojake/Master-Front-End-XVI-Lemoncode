export interface RickAndMortyDetailEntity {
	id: string;
	name: string;
	status: string;
	species: string;
	location: string;
	episode: string;
	image: string;
}

export const createDefaultRickAndMortyEntity = (): RickAndMortyDetailEntity => ({
	id: "",
	name: "",
	status: "",
	species: "",
	location: "",
	episode: "",
	image: "",
});