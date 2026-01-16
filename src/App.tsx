import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import { fetchMovies } from "./services/movieService";
import type { Movie } from "./types/movie";


function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    setMovies([]);         

    try {
      const data = await fetchMovies(query);

      if (data.results.length === 0) {
        toast.error("No movies found for your request.");
        return;
      }

      setMovies(data.results);
    } catch {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="wrapper">
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid
      movies={movies}
      onSelect={movie => console.log(movie)}
      />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;



