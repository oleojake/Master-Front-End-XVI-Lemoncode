import { graphql } from "#core/api";
import { Character } from "./character.api-model";

export const getCharacter = async (id: string): Promise<Character> => {
	const query = `
		query GetCharacter($id: Int!) {
			character(id: $id) {
				id
				name
				status
				species
				type
				gender
				image
				origin {
					name
					url
				}
				location {
					name
					url
				}
				episode
				url
				created
				bestSentence
			}
		}
	`;

	const data = await graphql<{ character: Character }, { id: number }>({
		query,
		variables: { id: Number(id) },
	});

	return data.character;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
	const response = await fetch('http://localhost:3000/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
        mutation UpdateBestSentence($id: Int!, $bestSentence: String!) {
          updateBestSentence(id: $id, bestSentence: $bestSentence)
        }
      `,
			variables: {
				id: character.id,
				bestSentence: character.bestSentence,
			},
		}),
	});
	const result = await response.json();
	return result.data.updateBestSentence;
};
