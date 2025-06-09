import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { characters } from './mock-data.js';
import { CharacterListResponse } from './model.js';
import { createHandler } from 'graphql-http/lib/use/fetch';
import { schema } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';
import { readFile } from 'fs/promises';

let db = {
	characters,
};

const app = new Hono();
app.use(logger());
app.use(cors());

app.get('/api/character', async (context) => {
	const response: CharacterListResponse = {
		info: {
			count: db.characters.length,
		},
		results: db.characters,
	};
	return context.json(response);
});

app.get('/api/character/:id', (context) => {
	return context.json(
		db.characters.find((c) => c.id === Number(context.req.param('id')))
	);
});

app.put('/api/character/:id', async (context) => {
	const id = Number(context.req.param('id'));
	const character = await context.req.json();
	db.characters = db.characters.map((c) =>
		c.id === id ? { ...c, ...character } : c
	);
	return context.body(null, 204);
});

app.all('/graphql', async (c) => {
	const handler = createHandler({
		schema,
		rootValue: resolvers,
	});
	return handler(c.req.raw);
});

app.get('/graphiql', async (c) => {
	const html = await readFile(
		new URL('./graphql/playground.html', import.meta.url),
		'utf-8'
	);
	return c.html(html);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
	console.log(`API REST running on http://localhost:${info.port}`);
	console.log(`GraphQL running at http://localhost:${info.port}/graphql`);
	console.log(`Playground available at http://localhost:${info.port}/graphiql`);
});
