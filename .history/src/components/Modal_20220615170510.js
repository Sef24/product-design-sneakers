import React from "react";
import { useGlobalContext } from "../context";

function Modal() {
  const { modal, openModal, closeModal } = useGlobalContext();
  return (
    <div className="{`modal-overlay`}">
      <div className="modal-container">
        <h3>Fall Limited Edition Sneakers</h3>
        <button className="close-modal-btn"></button>
      </div>
    </div>
  );
}

export default Modal;
