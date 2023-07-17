import { gql } from 'apollo-server-express';

export const movieSchema = gql`
  type Movie {
    id: ID!
    title: String!
    description: String!
    genre: String!
    year: Int!
    productionCompany: String!
    actors: [Actor!]!
  }

  type Actor {
    id: ID!
    name: String!
  }

  type Query {
    movies: [Movie!]!
  }
`;