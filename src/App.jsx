import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./Components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3001/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading movies...</div>;

  return (
    <div className="container my-5">
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
