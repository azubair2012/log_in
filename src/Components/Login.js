import React from "react";
import { Link } from "react-router-dom";
//importing Components
import Form from "./Form";
import Label from "./Label";
import Button from "./Button";

const LogIn = () => (
  <div>
    <h1>Log-in</h1>
    <Label name={"Username"} />
    <Form place={"Your Username"} />

    <Label name={"Password"} />
    <Form place={"Your Password"} type={"password"} />

    <Button Type={"submit"} Value={"Submit"} />
  </div>
);

export default LogIn;
