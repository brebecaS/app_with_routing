import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import Navigation from "./Navigation";
import About from "./About";
import "./App.css";
import RepositoriesPage from "./RepositoriesPage";
import RepositoryPage from "./RepositoryPage";
import NotFountPage from "./NotFountPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/repositories" element={<RepositoriesPage />} />
      <Route
        path="/repositories/:userName/:repository/"
        element={<RepositoryPage />}
      />
      <Route path="*" element={<NotFountPage />} />
    </Routes>
  </BrowserRouter>
);
// url=="/contact"
// if(url === "/") {
//   incarca <HomePage />
// }
// if(url ==="/contact"){
//     incarca <ContactPage />
// }
