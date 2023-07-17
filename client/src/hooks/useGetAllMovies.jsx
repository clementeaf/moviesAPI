import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
query GetAllMovies {
  movies {
    title
    description
    genre
    year
    productionCompany
    actors {
      id
      name
    }
  }
}
`

export default function useGetMovie () {
    const {loading, error, data} = useQuery(GET_MOVIES, {
        onCompleted: (queryData) => {
            return queryData.movies; 
        }
    });

    return {
        error, 
        data, 
        loading
    };
}