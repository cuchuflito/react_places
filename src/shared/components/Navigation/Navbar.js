import React from "react";
import NavLinks from "./Links";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.NavCenter}>
        <Link to="/">
          <div className={classes.LogoContainer}>
            <div className={classes.Logo}></div>
            <div className={classes.Name}>SharePlaces</div>
          </div>
        </Link>
        <button className={classes.toggleBtn}>
          <FaBars onClick={props.toggle} />
        </button>
        <div className={classes.LinksContainer}>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
