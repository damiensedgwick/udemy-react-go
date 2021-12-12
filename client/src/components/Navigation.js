import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <ul className="space-y-2">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};
