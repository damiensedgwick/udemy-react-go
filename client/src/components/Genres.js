import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {Loading} from "./Loading";
import {Error} from "./Error";

export const Genres = () => {
  const {data, error} = useFetch("http://localhost:8080/v1/genres")

  if (!data) return (
    <Loading />
  )

  if (error) return (
    <Error />
  )

  return (
    <div>
      <h2 className="text-xl mb-4">Genres</h2>

      <ul className="space-y-1 flex flex-col mb-8">
        {data.genres.map((genre) =>
          <li key={genre.id}>
            <NavLink to={`/genres/${genre.id}`}>{genre.genre_name}</NavLink>
          </li>
        )}
      </ul>

      <Outlet/>
    </div>
  );
};
