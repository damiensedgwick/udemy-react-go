import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <ul className="space-y-2">
      <li className="underline">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="underline">
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li className="underline">
        <NavLink to="/admin">Manage Catalogues</NavLink>
      </li>
    </ul>
  );
};
