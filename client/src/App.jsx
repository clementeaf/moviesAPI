import MovieById from "./components/Movies/MovieById";
import MoviesList from "./components/Movies/MoviesList";

export default function App() {
  return (
    <main className="flex flex-1 h-screen w-screen flex-col justify-center items-center">
      <MoviesList />
      <MovieById />
    </main>
  )
}
