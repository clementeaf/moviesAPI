import { gql, useQuery } from '@apollo/client';

const GET_ALL_ACTORS = gql`
 query GetAllActors {
   actors {
    id
    name
    movies
   }
 }
`

export default function useGetAllActorsList () {
    const {loading, error, data} = useQuery(GET_ALL_ACTORS, {
        onCompleted: (queryData) => {
            return queryData.actors; 
        }
    });

    return {
        error, 
        data, 
        loading
    };
}