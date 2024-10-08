import { RickAndMortyDetailEntity } from "../detail.vm";
import { RickAndMortyDetailEntityApi } from "./detail-api-model";
import { getEpisodeName } from "./detail.api";

export const mapCharacterFromApiToVm = async (
	member: RickAndMortyDetailEntityApi
): Promise<RickAndMortyDetailEntity> => {
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