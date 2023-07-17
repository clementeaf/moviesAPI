import { ActorModel } from '../models/actor';
import { MovieModel } from '../models/movie';

export async function initializeData() {
  try {
    // Crear actores de ejemplo
    const actor1 = await ActorModel.create({ name: 'Actor 1' });
    const actor2 = await ActorModel.create({ name: 'Actor 2' });

    // Crear películas de ejemplo y asignar actores
    await MovieModel.create({
      title: 'Película 1',
      description: 'Descripción de la película 1',
      genre: 'Género 1',
      year: 2021,
      productionCompany: 'Compañía 1',
      actors: [actor1._id, actor2._id],
    });

    await MovieModel.create({
      title: 'Película 2',
      description: 'Descripción de la película 2',
      genre: 'Género 2',
      year: 2022,
      productionCompany: 'Compañía 2',
      actors: [actor2._id],
    });

    console.log('Datos de ejemplo insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos de ejemplo:', error);
  }
}