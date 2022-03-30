import "./App.css";
import Nav from "./components/nav";
import Home from "./pages";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Findsupport from "./pages/findsupport";
import Getinvolved from "./pages/getinv";
import Dropdown from "./components/Dropdown";
import React, { useState, useEffect } from "react";

function App() {
  const [isClick, setClick] = useState(false);
  let toggle = () => {
    setClick(!isClick);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isClick) {
        setClick(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Nav toggle={toggle} />
      <Dropdown isClick={isClick} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/findsuport" element={<Findsupport />} />
        <Route path="/getinvolved" element={<Getinvolved />} />
      </Routes>
    </>
  );
}

export default App;
