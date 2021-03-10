import React, { useContext, useState } from "react";
import { Card, ErrorModal } from "../../shared/components/UIElements";
import {
  Input,
  Button,
  ImageUpload,
} from "../../shared/components/FormElements";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_FILE,
} from "../../util/validators";

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

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className={classes.Auth}>
      <div className={classes.authContainer}>
        <h1>Authentication</h1>
      </div>
      <Card className={classes.AuthenticationCard}>
        <h2>Login required</h2>
        <form>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}
          {!isLoginMode && (
            <ImageUpload
              center
              id="image"
              onInput={inputHandler}
              textInfo="Pick an avatar Image"
              errorText="Please enter an Image."
            />
          )}

          <Input
            element="input"
            id="email"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          {console.log("form validty: ",formState)}
          <button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          {" "}
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </div>
  );
};

export default Auth;
