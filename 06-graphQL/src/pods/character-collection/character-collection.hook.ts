import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api/character-collection.api';
import { mapToCollection } from '#common/mappers';
import { mapFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
	const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
		[]
	);

	const loadCharacterCollection = () => {
		getCharacterCollection().then((result) =>
			setCharacterCollection(mapToCollection(result, mapFromApiToVm))
		);
	};

	return { characterCollection, loadCharacterCollection };
};
