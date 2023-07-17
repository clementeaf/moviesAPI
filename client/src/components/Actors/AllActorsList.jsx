import useGetAllActorsList from "../../hooks/useAllActorsList";

export default function AllActorsList() {
  const useAllActorsListQuery = useGetAllActorsList();

  if(useAllActorsListQuery.loading) return <div>Loading...</div>
  if(useAllActorsListQuery.error) return <div>Error</div>

  return (
    <div>
      {
        useAllActorsListQuery.data.actors.map(({id, name, movies}) => (
          <div key={id}>
            <p>Name: {name}</p>
            <div>
              {
                movies.map((title) => (
                  <p key={title}>Title: {title}</p>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}
