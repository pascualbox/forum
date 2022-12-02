/** @format */

import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Button from "../../components/button/Button";
import Switch from "../../components/switch/Switch";
import Select from "react-select";
import "./Modal.scss";

const Modal = ({ setIsOpen }) => {
  const [checked, setchecked] = useState(false);
  function handleChange(checked) {
    setchecked(!checked);
    this.setState({ checked });
  }
  return (
    <div className="centered">
      <div className="modal">
        <div className="modalHeader">
          <div className="box">
            <select name="select">
              <option value="value1">Value 1</option>
              <option value="value2" selected>
                Value 2
              </option>
              <option value="value3">Value 3</option>
            </select>
          </div>

          <h5 className="heading">Crear post</h5>
          <Switch onChange={handleChange} checked={checked} />
        </div>
        <div className="modalContent">
          <textarea
            placeholder="Escribe aquí el título"
            className="modalInputTextTitle"
          />
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
  );
};

export default Modal;
