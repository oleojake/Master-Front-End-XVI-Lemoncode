import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Origin {
    name: String
    url: String
  }

  type Location {
    name: String
    url: String
  }

  type Character {
    id: Int
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Origin
    location: Location
    image: String
    episode: [String]
    url: String
    created: String
    bestSentence: String
  }

  type Info {
    count: Int
  }

  type CharacterListResponse {
    info: Info
    results: [Character]
  }

  type Query {
    characters: CharacterListResponse
    character(id: Int!): Character
    hello: String
  }
`);
