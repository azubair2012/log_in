import React from "react";
import { Link } from "react-router-dom";

// importing components
import Button from "./Button";

const Navbar = () => (
  <div>
    <h1>This is the Navbar</h1>
    <Link to={"/"}>
      <Button Value={"Home"} Type={"button"} />
    </Link>
  </div>
);

export default Navbar;
