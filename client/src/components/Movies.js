import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {Error} from "./Error";
import {Loading} from "./Loading";

export const Movies = () => {
  const {data, error} = useFetch("http://localhost:8080/v1/movies")

  if (!data) return (
    <Loading />
  )

  if (error) return (
    <Error />
  )

  return (
    <div>
      <h2 className="text-xl mb-4">Choose a Movie!</h2>

      <ul className="space-y-1 flex flex-col mb-8">
        {data.movies.map((movie) => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
