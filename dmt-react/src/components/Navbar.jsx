import React from 'react';

const Navbar = () => {
  return (
    <ul className="games-navbar">
      <li className="games-navbar__content p-3">
        <img src="/img/games-img/icon-dota-2-20.png" alt="dota2" />
        <span className="ml-3">Dota 2</span>
      </li>
      <li className="games-navbar__content">
        <img src="/img/games-img/icon-cs-go-20.png" alt="cs:go" />
        <span className="ml-3">CS:GO</span>
      </li>
      <li className="games-navbar__content">
        <img src="/img/games-img/icon-wot-20.png" alt="wot" />
        <span className="ml-3">WoT</span>
      </li>
      <li className="games-navbar__content">
        <img src="/img/games-img/icon-lol-20.png" alt="lol" />
        <span className="ml-3">LoL</span>
      </li>
      <li className="games-navbar__content">
        <img src="/img/games-img/icon-pubg-20.png" alt="pubg" />
        <span className="ml-3">PUBG</span>
      </li>
      <li className="games-navbar__content">
        <img src="/img/games-img/icon-farcry-20.png" alt="farcry6" />
        <span className="ml-3">Far Cry 6</span>
      </li>
    </ul>
  );
};

export default Navbar;
