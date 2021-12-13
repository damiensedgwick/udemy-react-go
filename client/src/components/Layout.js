import React from "react";
import { NavLink } from "react-router-dom";

import { Navigation } from "./Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto py-4 px-2">
        <NavLink to="/" className="text-2xl">
          Go Watch Movies
        </NavLink>
      </div>
      <div className="container mx-auto grid grid-cols-5 grid-rows-5 h-screen">
        <div className="col-span-1 px-2">
          <Navigation />
        </div>
        <div className="col-span-4 px-2">{children}</div>
      </div>
    </>
  );
};
