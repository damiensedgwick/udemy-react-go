import React from "react";

import { Navigation } from "./Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <h1 className="text-2xl text-center py-4">Go Watch Movies</h1>
      <div className="container mx-auto grid grid-cols-5 grid-rows-5 h-screen">
        <div className="col-span-1 px-2">
          <Navigation />
        </div>
        <div className="col-span-4 px-2">{children}</div>
      </div>
    </>
  );
};
