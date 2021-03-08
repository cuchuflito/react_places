import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import NavLinks from "./Links";
import { IoMdClose } from "react-icons/io";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      classNames="slide-in-left"
      timeout={200}
    >
      <aside className={classes.sideDrawer} onClick={props.onClick}>
        <div className={classes.LinkContainer}>
          <NavLinks />
        </div>
        <div className={classes.LogoContainer}>
          <div className={classes.Logo}></div>
        </div>
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default sideDrawer;
