import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { initialMovies } from "../utils/movies";

export const Movies = () => {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <div>
      <h2 className="text-xl mb-4">Choose a Movie!</h2>

      <ul className="space-y-1 flex flex-col mb-8">
        {movies.map((movie) => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </NavLink>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};
