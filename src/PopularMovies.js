import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./PopularMovies.css";

function PopularMovies({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="popularMovies">
      <h2>{title}</h2>

      <div className="popularMovies_posters">
        <div className="popularMovies_poster">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <div key={movie.id}>
                  <img
                    key={movie.id}
                    className={`popularMovies_poster ${
                      isLargeRow && "popularMovies_posterLarge"
                    }`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                  {movie.original_title ? (
                    <p className="movieName">{movie.original_title}</p>
                  ) : (
                    ""
                  )}
                </div>
              )
          )}
        </div>
        <div className="popularMovies_names">
          <p>toto</p>
          <p>animation</p>
        </div>
      </div>
    </div>
  );
}

export default PopularMovies;
