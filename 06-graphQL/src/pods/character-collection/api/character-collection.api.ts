import { graphql } from '#core/api';
import { CharacterEntityApi, CharacterListResponse } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
	const query = `
	query {
		characters {
			info {
				count
			}
			results {
				id
				name
				status
				species
				image
				bestSentence
				origin {
					name
				}
				location {
					name
				}
			}
		}
	}
`;

	const data = await graphql<{ characters: CharacterListResponse }>({
		query,
	});

	if (!data.characters || !Array.isArray(data.characters.results)) {
		throw new Error('Invalid data format from GraphQL');
	}

	return data.characters.results;
};
