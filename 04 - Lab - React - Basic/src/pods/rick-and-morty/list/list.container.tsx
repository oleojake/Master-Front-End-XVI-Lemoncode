import React, { useEffect } from "react";
import { useDebounce } from "use-debounce";
import {
	getCharacterCollection,
	getCharacterCollectionFilteredByName,
} from "./api/list.repository";
import { RickAndMortyComponent } from "./list.component";
import { RickAndMortyEntity } from "./list.vm";

export const RickAndMortyListContainer: React.FC = () => {
	const [characters, setCharacters] = React.useState<RickAndMortyEntity[]>([]);
	const [error, setError] = React.useState<string | null>(null);
	const characterInputRef = React.useRef<HTMLInputElement>(null);
	const [filter, setFilter] = React.useState<string>("");
	const [debouncedFilter] = useDebounce(filter, 500);

	useEffect(() => {
		getCharacterCollection().then((data) => setCharacters(data));
	}, []);

	useEffect(() => {
		getCharacterCollectionFilteredByName(characterInputRef.current.value)
			.then((data) => {
				setCharacters(data);
				setError(null);
			})
			.catch(() => setError("Any character found with that name"));
	}, [debouncedFilter]);

	const reloadCharacters = () => {
		getCharacterCollection().then((data) => setCharacters(data));
		characterInputRef.current.value = "";
	};

	return (
		<RickAndMortyComponent
			characters={characters}
			reloadCharacters={reloadCharacters}
			inputRef={characterInputRef}
			error={error}
			setFilter={setFilter}
			filter={filter}
		/>
	);
};
