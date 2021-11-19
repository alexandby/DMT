import React from 'react';

const Modal = (props) => {
  return (
    <form action="" className="modal-dialogue">
      <div className="modal-dialogue__content">
        <div className="modal-dialogue__content__header">
          <h1 className="modal-dialogue__content__heading">Modal placeholder</h1>
        </div>
        <div className="modal_dialogue_content__body"></div>
        <div className="modal_dialogue_content__footer">
          <input type="button" value="Edit" />
          <input type="button" value="Delete" />
        </div>
      </div>
    </form>
  );
};

export default Modal;
