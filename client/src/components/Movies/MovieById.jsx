import useGetMovieById from '../../hooks/useGetMovieById';

export default function MovieById() {
  const actorId = "64b5720f174021698b0ead4f";
  const { loading, error, data } = useGetMovieById({ actorId });

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error</div>;
  const {name, movies} = data.actor; 

  return (
    <div>
        <p>Name: {name}</p>
        <div>
          {
            movies.length > 0 && movies.map((title) => (
              <div key={title}>
                <p>Title: {title}</p>
              </div>
            ))
          }
        </div>
     
    </div>
  );
}