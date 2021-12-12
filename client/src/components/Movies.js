import React, { useState } from "react";

const initialMovies = [
  {
    id: 0,
    title: "Movie Number One",
    desc: "Some random description for movie number one.",
    runtime: 90,
  },
  {
    id: 1,
    title: "Movie Number Two",
    desc: "Some random description for movie number two.",
    runtime: 120,
  },
  {
    id: 2,
    title: "Movie Number Three",
    desc: "Some random description for movie number three.",
    runtime: 75,
  },
];

export const Movies = () => {
  const [movies, setMovies] = useState(initialMovies);
  return (
    <div>
      <h2 className="text-xl mb-4">Choose a Movie!</h2>

      <ul className="space-y-1">
        {movies.map((m) => (
          <li key={m.id}>
            <h4>{m.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
