import React from "react";
import { Link } from "react-router-dom";
//importing Components
import Form from "./Form";
import Label from "./Label";
import Button from "./Button";

const Signup = () => (
  <div>
    <h1>Signup</h1>
    <Label name={"Username"} />
    <Form place={"Your UserName"} />
    <Label name={"Email"} />
    <Form place={"youremail@mail.com"} type={"email"} />
    <Label name={"Password"} />
    <Form place={"Enter Your Password"} type={"password"} />
    <Label name={"Re-enter Password"} />
    <Form place={"Confirm Your Password"} type={"password"} />
    <Button Type={"submit"} Value={"Submit"} />
  </div>
);

export default Signup;
