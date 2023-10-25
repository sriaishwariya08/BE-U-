import React from "react";
import "./index.css";
import './App.css';
import Home from "./routes/Home"
import Products from "./routes/Products"
import Offers from "./routes/Offers"
import Loginn from "./routes/Loginn"
import Profile from "./routes/Profile"
import Recommends from "./routes/Recommends";

import { Route, Routes } from "react-router-dom";
function App()  {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Login" element={<Loginn />} />
        <Route path="/Recommends" element={<Recommends />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
