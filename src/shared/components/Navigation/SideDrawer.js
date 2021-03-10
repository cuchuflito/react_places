import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import NavLinks from "./Links";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const nodeRef = useRef(null);
  const content = (
    <CSSTransition
      in={props.show}
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      classNames="slide-in-left"
      timeout={200}
    >
      <aside ref={nodeRef} className={classes.sideDrawer} onClick={props.onClick}>
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

export default SideDrawer;
