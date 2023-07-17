export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  year: number;
  productionCompany: string;
  actors: Actor[];
}

export interface Actor {
  id: number;
  name: string;
  movies: string[];
}

export const dummyData: Movie[] = [
  {
    id: 1,
    title: "it",
    description: "Horror movie about killer clown",
    genre: "Horror, terror",
    year: 2015,
    productionCompany: "BlackBox",
    actors: [
      {
        id: 1,
        name: "joe",
        movies: ["it", "momie"],
      },
    ],
  },
  {
    id: 2,
    title: "Momie",
    description: "Horror movie about killer momie",
    genre: "Horror, terror",
    year: 2002,
    productionCompany: "Warner",
    actors: [
      {
        id: 1,
        name: "joe",
        movies: ["it", "momie"],
      },
      {
        id: 2,
        name: "ana",
        movies: ["momie"],
      },
    ],
  },
];