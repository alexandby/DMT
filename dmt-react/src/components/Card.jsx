import React, { useState } from 'react';

const Card = (props) => {
  const [isJoined, setIsJoined] = useState(false);

  const onClickJoinBtn = () => {
    //!isJoined ? setIsJoined(true) : setIsJoined(false);
    setIsJoined(!isJoined);
  };

  return (
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
          onClick={props.onClickDetail}
          className="detail-btn d-none"
          id={props.id}
          type="image"
          alt="details"
          src="/img/detail.png"
        />
        <input
          onClick={onClickJoinBtn}
          className="join-btn"
          id={props.id}
          type="image"
          alt="join"
          src={isJoined ? '/img/link.png' : '/img/play-button.png'}
        />
      </div>
    </div>
  );
};

export default Card;
