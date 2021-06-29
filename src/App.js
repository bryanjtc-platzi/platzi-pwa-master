import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Timer from "./pages/Timer";
import IsOffline from "./components/IsOffline";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
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
            <Route exact path="/" component={Home} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/timer" component={Timer} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
