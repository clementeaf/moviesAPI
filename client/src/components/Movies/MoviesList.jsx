import useGetAllMovies from '../../hooks/useGetAllMovies';
import MoviesTable from './MoviesTable';

export default function MoviesList() {
  const useGetMoviesQuery = useGetAllMovies();

  if(useGetMoviesQuery.loading) return <div>Loading....</div>
  if(useGetMoviesQuery.error) return <div>Error</div>

  return (
    <div
    className='flex flex-col gap-10'
    >
    <MoviesTable data={useGetMoviesQuery.data.movies}/>
    </div>
  )
}
