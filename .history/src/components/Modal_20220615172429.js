import React from "react";
import { useGlobalContext } from "../context";
import close from "../images/icon-close.svg";

function Modal() {
  const { modal, openModal, closeModal } = useGlobalContext();
  return (
    <div
      className={`${openModal ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <div className="modal-container bg-white">
        <h3>Fall Limited Edition Sneakers</h3>
        <button className="close-modal-btn hover:scale-110 cursor-pointer">
          <img src={close} alt="" onClick={closeModal} />
        </button>
      </div>
    </div>
  );
}

export default Modal;
