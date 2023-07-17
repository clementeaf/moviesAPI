import { gql } from 'apollo-server-express';

export const actorSchema = gql`
  type Actor {
    id: ID!
    name: String!
    movies: [Movie!]!
  }

  type Query {
    actors: [Actor!]!
    actor(id: ID!): Actor
  }
`;