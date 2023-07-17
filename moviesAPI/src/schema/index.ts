import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from 'graphql-tools';
import { movieSchema } from './movie';
import { actorSchema } from './actor';
import { MovieResolvers } from '../resolvers/MovieResolvers';
import { ActorResolvers } from '../resolvers/ActorResolvers';

const typeDefs = mergeTypeDefs([movieSchema, actorSchema]);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [MovieResolvers, ActorResolvers],
});