import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

function Button(props) {
  if (props.href) {
    return (
      <a
        className={`${classes.Button} ${classes.Button`_${
          props.size || "default"
        }`} ${props.inverse && classes.ButtonInverse} ${
          props.danger && classes.ButtonDanger
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`${classes.Button} ${classes.Button`_${
          props.size || `default`
        }`} 
          ${props.inverse && classes.ButtonInverse} 
          ${props.danger && classes.ButtonDanger}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      className={`${classes.Button} ${classes.Button`_${
        props.size || "default"
      }`} 
      ${props.inverse && classes.ButtonInverse}
    ${props.danger && classes.ButtonDanger}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
