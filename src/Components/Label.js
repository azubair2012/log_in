import React from "react";

const Label = ({ name, For }) => (
  <div>
    <label for={For}>{name}</label>
  </div>
);

export default Label;
