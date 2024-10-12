import React from 'react';
import './Modal.css';

const Modal = ({ src, closeModal }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <img src={src} alt="full view" />
      </div>
    </div>
  );
};

export default Modal;
