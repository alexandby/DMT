import React, { useState } from 'react';
import Edit from './Edit';

const Modal = (props) => {
  const [editOpened, setEditOpened] = useState(false);
  return (
    <>
      {editOpened ? <Edit editName={props.mName} /> : null}
      <div className="modal-dialogue">
        <div className="modal-dialogue__content">
          <div className="modal-dialogue__content__header">
            <img src={props.mLogo} alt="dota2modal" className="w-100" />
          </div>
          <div className="modal-dialogue__content__body">
            <h1>{props.mName}</h1>
            <h2>{props.mDetails}</h2>
          </div>
          <div className="modal-dialogue__content__footer">
            <input type="button" value="Edit" onClick={() => setEditOpened(true)} />
            <input type="button" value="Delete" />
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
