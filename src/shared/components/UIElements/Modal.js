import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  const content = (
    <div
      ref={props.nodeRef}
      className={`${classes.Modal} ${props.className}`}
      style={props.style}
    >
      <header className={`${classes.ModalHeader} ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`${classes.ModalContent} ${props.footerClass}`}>
          {props.children}
        </div>
        <footer className={classes.footer}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const nodeRef = React.useRef(null);
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        nodeRef={nodeRef}
        unmountOnExit
        timeout={200}
        classNames="modal" // corregir css
      >
        <ModalOverlay nodeRef={nodeRef} {...props} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
