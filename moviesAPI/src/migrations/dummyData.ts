import { v4 as uuidv4 } from 'uuid';

export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string;
  year: number;
  productionCompany: string;
  actors: Actor[];
}

export interface Actor {
  id: string;
  name: string;
  movies: string[];
}

export const dummyData: Movie[] = [
  {
    id: uuidv4(),
    title: "it",
    description: "Horror movie about killer clown",
    genre: "Horror, terror",
    year: 2015,
    productionCompany: "BlackBox",
    actors: [
      {
        id: uuidv4(),
        name: "joe",
        movies: ["it", "momie"],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Momie",
    description: "Horror movie about killer momie",
    genre: "Horror, terror",
    year: 2002,
    productionCompany: "Warner",
    actors: [
      {
        id: uuidv4(),
        name: "joe",
        movies: ["it", "momie"],
      },
      {
        id: uuidv4(),
        name: "ana",
        movies: ["momie"],
      },
    ],
  },
];
