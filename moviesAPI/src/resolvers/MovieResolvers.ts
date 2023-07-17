import { ActorModel } from "../models/actor";
import { MovieModel} from "../models/movie";

export const MovieResolvers = {
  Query: {
    movies: async () => {
      try {
        const movies = await MovieModel.find();
        return movies;
      } catch (error) {
        console.error('Error al obtener las películas:', error);
        throw new Error('Error al obtener las películas');
      }
    },
  },
  Movie: {
    actors: async (parent: any) => {
      try {
        const actors = await ActorModel.find({ _id: { $in: parent.actors } });
        return actors;
      } catch (error) {
        console.error('Error al obtener los actores:', error);
        throw new Error('Error al obtener los actores');
      }
    },
  },
};