import React from "react";
import Modal from "./Modal";
import { Button } from "../FormElements";

function ErrorModal(props) {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error occurred!"
      show={!!props.error}
      footer={<Button danger onClick={props.onClear}>Continue</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
}

export default ErrorModal;
