import React from "react";
import ReactDOM from "react-dom";
import "../../assets/styles/components/ModalCreatePost/ModalCreatePost.scss";

const CreatePost = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button ">
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById("Modal")
  );
};

export default CreatePost;
