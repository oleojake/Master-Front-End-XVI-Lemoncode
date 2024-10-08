import { RickAndMortyEntity } from "../list.vm";
import { getEpisodeName } from "./list.api";
import { RickAndMortyEntityApi } from "./list.api-model";

export const mapCharacterFromApiToVm = async (
	member: RickAndMortyEntityApi
): Promise<RickAndMortyEntity> => {
	const episodeName = await getEpisodeName(member.episode[0]);

	return {
		id: member.id.toString(),
		name: member.name,
		status: member.status,
		species: member.species,
		location: member.location.name,
		episode: episodeName,
		image: member.image,
	};
};

export const mapCharacterCollectionFromApiToVm = async (
	memberCollection: RickAndMortyEntityApi[]
): Promise<RickAndMortyEntity[]> => {
	return Promise.all(memberCollection.map((member) => mapCharacterFromApiToVm(member)));
};