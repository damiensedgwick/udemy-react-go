import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {Loading} from "./Loading";
import {Error} from "./Error";

export const Genre = () => {
  const navigate = useNavigate()
  const params = useParams();
  const genreId = parseInt(params.genreId, 10);
  const {data, error} = useFetch(`http://localhost:8080/v1/genres/${genreId}`)

  if (!data) return (
    <Loading />
  )

  if (error) return (
    <Error />
  )

  return (
    <>
      <button onClick={() => navigate("/movies")}>Back</button>
      <div className="border border-black py-4 px-6 space-y-4">
        <h3 className="text-2xl">{data.genre.genre_name}</h3>
      </div>
    </>
  );
};
