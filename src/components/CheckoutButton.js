import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Checkout from "./CheckoutForm";
import UserContext from "../context/UserContext";

function CheckoutButton() {
  const [show, setShow] = useState(false);
  const { total } = useContext(UserContext);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} fixed="bottom">
        Checkout ${total}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="checkout"
      >
        <Modal.Header closeButton>
          <Modal.Title id="checkout">Checkout $ {total} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Checkout />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CheckoutButton;
