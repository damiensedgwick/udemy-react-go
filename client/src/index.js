import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { Admin } from "./components/Admin";
import { FourZeroFour } from "./components/FourZeroFour";
import { Movie } from "./components/Movie";
import { Genres } from "./components/Genres";
import { Genre } from "./components/Genre";

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:genreId" element={<Genre />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
