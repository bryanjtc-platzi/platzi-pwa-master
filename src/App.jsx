import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Timer from "./pages/Timer";
import IsOffline from "./components/IsOffline";
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">
              Recetas <IsOffline>Offline</IsOffline>
            </Link>
            <Link to="/timer" className="timerLink">
              ⏱
            </Link>
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/recipe/:recipeId" element={<Recipe />} />
              <Route path="/timer" element={<Timer />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
