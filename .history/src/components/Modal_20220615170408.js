import React from "react";
import { useGlobalContext } from "../context";

function Modal() {
  const { modal, openModal, closeModal } = useGlobalContext();
  return (
    <div className="{`modal-overlay`}">
      <div>
        <h3>
          <button></button>
        </h3>
      </div>
    </div>
  );
}

export default Modal;
