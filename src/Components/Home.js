import React from "react";
import Button from "./Button";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome To Splendor Soft</h1>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>

    <Link to="/Login">
      <Button Value={"Login"} Type={"button"} />
    </Link>
    <Link to="/Signup">
      <Button Value={"Signup"} Type={"button"} />
    </Link>
  </div>
);

export default Home;
