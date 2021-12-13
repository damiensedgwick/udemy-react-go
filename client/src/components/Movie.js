import React from "react";
import { useParams } from "react-router-dom";

import { getMovie } from "../utils/movies";

export const Movie = () => {
  const params = useParams();
  const movie = getMovie(parseInt(params.movieId, 10));

  return (
    <div className="border border-black py-4 px-6 space-y-4">
      <h3 className="text-2xl">{movie.title}</h3>
      <p>{movie.desc}</p>
      <p>
        <small>runtime approx {movie.runtime} mins</small>
      </p>
    </div>
  );
};
