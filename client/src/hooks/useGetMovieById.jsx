import { gql, useQuery } from '@apollo/client';

const GET_MOVIE_BY_ID = gql`
  query GetActorById($id: ID!) {
    actor(id: $id) {
      id
      name
      movies {
        title
      }
    }
  }
`;

export default function useGetMovieById({ actorId }) {
  const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
    variables: { id: actorId },
  });

  return {
    loading,
    error,
    data,
  };
}