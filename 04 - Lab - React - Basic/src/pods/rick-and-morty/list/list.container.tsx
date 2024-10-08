import React, { useEffect } from "react";
import { getCharacterCollection } from "./api/list.repository";
import { RickAndMortyComponent } from "./list.component";
import { RickAndMortyEntity } from "./list.vm";

export const RickAndMortyListContainer: React.FC = () => {
	const [characters, setCharacters] = React.useState<RickAndMortyEntity[]>([]);
	const [error, setError] = React.useState<string>("");
	const characterInputRef = React.useRef<HTMLInputElement>(null);

	useEffect(() => {
		getCharacterCollection().then((data) => setCharacters(data));
	}, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (characterInputRef.current) {
			getCharacterCollection(characterInputRef.current.value)
				.then((data) => setCharacters(data))
				.catch(() => setError("Error searching the characters. Check the name."));
		}
	};

	return (
		<RickAndMortyComponent
			characters={characters}
			handleSubmit={handleSubmit}
			inputRef={characterInputRef}
			error={error}
		/>
	);
};
