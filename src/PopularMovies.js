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
                    className={`popularMovies_poster2 ${
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
        <div className="popularMovies_effect" />
        <div className="popularMovies_names">
          <div>
            <p className="popularMovies_genre">ADVENTURE</p>
            <p className="popularMovies_genre">ACTION</p>
            <p className="popularMovies_genre">ANIMATION</p>
          </div>

          <div>
            <p className="popularMovies_genre">COMEDY</p>
            <p className="popularMovies_genre">CRIME</p>
            <p className="popularMovies_genre">DRAMA</p>
            <p className="popularMovies_genre">FAMILY</p>
          </div>

          <div>
            <p className="popularMovies_genre">FANTASY</p>
            <p className="popularMovies_genre">HISTORY</p>
            <p className="popularMovies_genre">HORROR</p>
            <p className="popularMovies_genre">MUSIC</p>
          </div>

          <div>
            <p className="popularMovies_genre">ROMANCE</p>
            <p className="popularMovies_genre">SCIENCE FICTION</p>
            <p className="popularMovies_genre">THRILLER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularMovies;
