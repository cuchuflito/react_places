import React, { useContext, Fragment } from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  Button,
  ImageUpload,
} from "../../shared/components/FormElements";
import { ErrorModal, LoadingSpinner } from "../../shared/components/UIElements";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

import classes from "./NewPlace.module.css";

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
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
  const history = useHistory();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("address", formState.inputs.address.value);
      formData.append("creator", auth.userId);
      formData.append("image", formState.inputs.image.value);
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places`,
        "POST",
        formData,
        { Authorization: "Bearer " + auth.token }
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className={classes.PlaceForm} onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          element="input"
          id="title"
          label="Title"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
        />
        <Input
          element="textarea"
          id="description"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description,min length of 5"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="address"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address"
          onInput={inputHandler}
        />
        <ImageUpload
          id="image"
          errorText="Please enter a image"
          onInput={inputHandler}
        />
        <Button
          externalClass={classes.Button}
          type="submit"
          disabled={!formState.isValid}
        >
          ADD PLACE
        </Button>
      </form>
    </Fragment>
  );
};

export default NewPlace;
