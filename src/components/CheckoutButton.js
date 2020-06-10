import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Checkout from "./CheckoutForm";

function CheckoutButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Checkout
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="checkout"
      >
        <Modal.Header closeButton>
          <Modal.Title id="checkout">Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Checkout />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CheckoutButton;
