import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
	character: apiModel.Character
): viewModel.CharacterEntityVm => ({
	id: character.id ?? 0,
	name: character.name ?? '',
	image: character.image ?? '',
	status: character.status ?? '',
	species: character.species ?? '',
	type: character.type ?? '',
	gender: character.gender ?? '',
	origin: {
		name: character.origin?.name ?? '',
		url: character.origin?.url ?? '',
	},
	location: {
		name: character.location?.name ?? '',
		url: character.location?.url ?? '',
	},
	episode: character.episode ?? [],
	url: character.url ?? '',
	created: character.created ?? '',
	bestSentence: character.bestSentence ?? '',
});


export const mapCharacterFromVmToApi = (
	character: viewModel.CharacterEntityVm
): apiModel.Character => ({
	...character,
	id: character.id,
	name: character.name,
	image: character.image,
	status: character.status,
	species: character.species,
	origin: {
		name: character.origin.name,
		url: character.origin.url,
	},
	location: {
		name: character.location.name,
		url: character.location.url,
	},
	bestSentence: character.bestSentence,
})