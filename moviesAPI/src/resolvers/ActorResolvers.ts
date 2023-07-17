import { ActorModel } from '../models/actor';

export const ActorResolvers = {
  Query: {
    actors: async () => {
      try {
        const actors = await ActorModel.find();
        return actors;
      } catch (error) {
        console.error('Error al obtener los actores:', error);
        throw new Error('Error al obtener los actores');
      }
    },
    actor: async (parent: any, { id }: { id: string }) => {
      try {
        const actor = await ActorModel.findOne({ _id: id });
        return actor;
      } catch (error) {
        console.error('Error al obtener el actor:', error);
        throw new Error('Error al obtener el actor');
      }
    },
  },
};