/** @format */

import { Link } from "@mui/material";
import React from "react";
import "./Button.scss";

function Button(props) {
  let baseUrl = "http://localhost:3000/";
  return (
    <a className="linkHome" href={baseUrl}>
      <button className="rounded-button"> {props.message} </button>
    </a>
  );
}

export default Button;
