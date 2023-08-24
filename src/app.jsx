import React from "react";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Dream from "./components/dream/Dream";
import Contact from "./components/contact/contact";
import users from "../about/about-user/user"
import Header from "./components/header/Header";
import styles from "./app.module.scss"
export default function App() {
  return (
    <div>
      <Header logo={users["logotip"]} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Dream" element={<Dream />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
