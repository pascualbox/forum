/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Button from "../button/Button";
import Switch from "../switch/Switch";
import "./Modal.scss";
import { useState } from "react";

const Modal = ({ setIsOpen }) => {
  const [checked, setchecked] = useState(false);
  function handleChange(checked) {
    setchecked(!checked);
    this.setState({ checked });
  }
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Crear post</h5>
            <Switch onChange={handleChange} checked={checked} />
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <textarea
              placeholder="Escribe aquí el mensaje"
              className="modalInputText"
            />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <Button message="Enviar mensaje" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
