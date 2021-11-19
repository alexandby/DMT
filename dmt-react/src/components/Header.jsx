import React from 'react';

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
          <button className="header-section__btn mr-3">
            <span>Login</span>
          </button>
          <button className="header-section__btn">
            <span>Register</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
