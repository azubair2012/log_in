import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//importing Components

import Navbar from "./Components/Navbar";
import LogIn from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={LogIn} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
