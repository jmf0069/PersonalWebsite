import React, { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MenuExpanded from "./components/MenuExpanded/MenuExpanded";
import Work from "./components/Work/Work";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="not__header">
        <Home />
        <About />
        <Work />
      </div>
    </div>
  );
}

export default App;
