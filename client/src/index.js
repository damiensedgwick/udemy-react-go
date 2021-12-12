import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Home = () => {
  return <h1>Home</h1>;
};

export const Movies = () => {
  return <h1>Movies</h1>;
};

export const Admin = () => {
  return <h1>Admin</h1>;
};

export const FourZeroFour = () => {
  return <h1>Page Not Found</h1>;
};

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

export const Layout = ({ children }) => {
  return (
    <>
      <h1 className="text-2xl text-center py-4">Go Watch Movies</h1>
      <div className="container mx-auto grid grid-cols-5 grid-rows-5 h-screen">
        <div className="col-span-1 bg-blue-100 px-2">
          <Navigation />
        </div>
        <div className="col-span-4 bg-green-100 px-2">{children}</div>
      </div>
    </>
  );
};

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
