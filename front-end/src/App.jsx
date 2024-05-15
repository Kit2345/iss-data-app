import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Position from "./components/Position.jsx";
import Astros from "./components/Astros.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/position" element={<Position />} />
            <Route path="/astros" element={<Astros />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
