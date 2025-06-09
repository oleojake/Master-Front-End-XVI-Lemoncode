import { characters } from '../mock-data.js';

export let db = {
	characters,
};

export const resolvers = {
	hello: () => {
		return 'Working endpoint!';
	},

	characters: () => {
		return {
			info: {
				count: db.characters.length,
			},
			results: db.characters,
		};
	},

	character: ({ id }: { id: number }) => {
		return db.characters.find((c) => c.id === id);
	},

	updateBestSentence: ({
		id,
		bestSentence,
	}: {
		id: number;
		bestSentence: string;
	}): boolean => {
		const character = db.characters.find((c) => c.id === id);
		if (!character) return false;
		character.bestSentence = bestSentence;
		return true;
	},
};
