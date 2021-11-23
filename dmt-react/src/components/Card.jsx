import React from 'react';
import Modal from './Modal';

const Card = (props) => {
  const [modalOpened, setModalOpened] = React.useState(false);
  return (
    <>
      {modalOpened ? (
        <Modal
          mName={props.cardName}
          mDetails={props.cardDetails}
          mLogo={props.cardLogo}
          onClose={() => setModalOpened(false)}
        />
      ) : null}
      <div className="card">
        <div className="card-header">
          <img src={props.cardLogo} alt="cardImg" />
        </div>
        <div className="card-body">
          <h2 className="text-center">{props.cardName}</h2>
          <p>Current players amount: 0</p>
          <p>
            Max players amount: <b>{props.cardMaxPlayers}</b>
          </p>
          <div className="card-body__rank">
            <b>Required rank:</b>
            <img src={props.cardRank} alt="rank" />
          </div>
        </div>
        <div className="card-footer">
          <input
            onClick={() => setModalOpened(true)}
            className="detail-btn d-none"
            id={props.id}
            type="image"
            alt="details"
            src="/img/detail.png"
          />
          <input className="join-btn" type="image" alt="join" src="/img/play-button.png" />
        </div>
      </div>
    </>
  );
};

export default Card;
