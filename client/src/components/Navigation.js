import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <ul className="space-y-2">
      <li className="underline">
        <Link to="/">Home</Link>
      </li>
      <li className="underline">
        <Link to="/movies">Movies</Link>
      </li>
      <li className="underline">
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};
