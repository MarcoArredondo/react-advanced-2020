import React, { useEffect } from "react";

const Modal = (props) => {
  const { modalContent, closeModal } = props;
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return <div className="">{modalContent}</div>;
};

export default Modal;
