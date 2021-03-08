import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
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
          <NavLinks to={`/${auth.userId}/places`}>MY PLACES</NavLinks>
        </li>
      )}
      {!auth.token && (
        <li>
          <NavLink to={`/auth`}>AUTH</NavLink>
        </li>
      )}
      {auth.token && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
