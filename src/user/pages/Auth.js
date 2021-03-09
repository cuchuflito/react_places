import React, { useContext, useState } from "react";
import { Card, ErrorModal } from "../../shared/components/UIElements";
import { AuthContext } from "../../shared/context/auth-context";
import { Input } from "../../shared/components/FormElements";
import { useForm } from "../../shared/hooks/form-hook";

import classes from "./Auth.module.css";

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <div className={classes.Auth}>
      <div className={classes.authContainer}>
        <h1>Authentication</h1>
      </div>
      <Card>
        <h2>Login required</h2>
        <form>
          <Input
            element="input"
            id="email"
            type="email"
            label="E-mail"
            validators={""}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={""}
            errorText="Please a valid password, at least 5 characters."
            onInput={inputHandler}
          />
          <button type="submit" disabled={""}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}{" "}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
