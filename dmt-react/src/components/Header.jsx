import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-section">
          <div className="header-section__logo">
            <img src="/img/death.png" alt="header" />
          </div>
          <h1 className="header-section__heading">DeathMatch Tournaments</h1>
        </div>
        <div className="header-section">
          <Link to="/">
            <button className="header-section__btn mr-3">
              <span>Sign in</span>
            </button>
          </Link>
          <Link to="/">
            <button className="header-section__btn">
              <span>Sign up</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
