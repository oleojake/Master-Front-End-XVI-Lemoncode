import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
	character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
	id: character.id,
	name: character.name,
	image: character.image,
	status: character.status,
	species: character.species,
	location: character.location.name,
	origin: character.origin.name,
});