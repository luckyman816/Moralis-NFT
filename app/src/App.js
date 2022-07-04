import React from "react";
import "./App.css";
import Collection from "./pages/Collection";
import Address from "./pages/Address";
import Home from "./pages/Home";

import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  
  

  return (
    <>
      <div className="topBanner">
        <div>&#9744; BlockScope</div>
        <div className="menu">
          <Link to="/">
            <div className="menuItem">&#60;Back</div>
          </Link>
          <div style={{color: "lightskyblue"}}>Moralis</div>
        </div>
      </div>
      <div>
      <div className="tabs">
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:collection" element={<Collection />} />
        <Route path="/:collection/:address" element={<Address />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
