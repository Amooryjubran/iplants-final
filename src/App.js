import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
