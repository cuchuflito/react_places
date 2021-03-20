import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { NavLink } from "react-router-dom";
import { Button } from "../FormElements";

const NavLinks = () => {
  const auth = useContext(AuthContext);
  return (
    <ul>
      <li>
        <NavLink to="/" exact>
          ALL PLACES
        </NavLink>
      </li>
      {auth.token && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.token && (
        <li>
          <NavLink to={`/places/new`}>ADD PLACE</NavLink>
        </li>
      )}
      {!auth.token && (
        <li>
          <NavLink to="/auth">AUTH</NavLink>
        </li>
      )}
      {auth.token && (
        <li>
          <Button onClick={auth.logout}>LOGOUT</Button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
