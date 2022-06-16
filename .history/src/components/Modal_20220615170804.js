import React from "react";
import { useGlobalContext } from "../context";
import close from "../images/icon-close.svg";

function Modal() {
  const { modal, openModal, closeModal } = useGlobalContext();
  return (
    <div className="{`${openModal? 'modal-overlay show-modal' : 'modal-overlay'}`}">
      <div className="modal-container">
        <h3>Fall Limited Edition Sneakers</h3>
        <button className="close-modal-btn">
          <img src={close} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
