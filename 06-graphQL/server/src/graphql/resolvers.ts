import { characters } from '../mock-data.js';

export const resolvers = {
	hello: () => {
		return 'Working endpoint!';
	},

	characters: () => {
		return {
			info: {
				count: characters.length,
			},
			results: characters,
		};
	},

	character: ({ id }: { id: number }) => {
		return characters.find((c) => c.id === id);
	},
};
