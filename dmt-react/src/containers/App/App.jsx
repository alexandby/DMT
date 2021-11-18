import React from 'react';
import './App.css';

const App = () => {
  return (
    <>
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
      <main>
        <div className="main-container">
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
          <section class="games-list">
            <div className="cards cards-list_content">
              <div className="card">
                <div className="card-header">
                  <img src="/img/games-img/dota2card.jpg" alt="cardImg" />
                </div>
                <div className="card-body">
                  <h2 className="text-center">Dota 2 MMR 8000+</h2>
                  <p>Current players amount: 0</p>
                  <p>Max players amount: 10</p>
                  <div className="card-body__rank">
                    <b>Required rank:</b>
                    <img src="/img/players-img/expert.png" alt="rank" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <img src="/img/games-img/dota2card.jpg" alt="cardImg" />
                </div>
                <div className="card-body">
                  <h2 className="text-center">Dota 2 MMR 8000+</h2>
                  <p>Current players amount: 0</p>
                  <p>Max players amount: 10</p>
                  <div className="card-body__rank">
                    <b>Required rank:</b>
                    <img src="/img/players-img/expert.png" alt="rank" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <img src="/img/games-img/dota2card.jpg" alt="cardImg" />
                </div>
                <div className="card-body">
                  <h2 className="text-center">Dota 2 MMR 8000+</h2>
                  <p>Current players amount: 0</p>
                  <p>Max players amount: 10</p>
                  <div className="card-body__rank">
                    <b>Required rank:</b>
                    <img src="/img/players-img/expert.png" alt="rank" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <img src="/img/games-img/dota2card.jpg" alt="cardImg" />
                </div>
                <div className="card-body">
                  <h2 className="text-center">Dota 2 MMR 8000+</h2>
                  <p>Current players amount: 0</p>
                  <p>Max players amount: 10</p>
                  <div className="card-body__rank">
                    <b>Required rank:</b>
                    <img src="/img/players-img/expert.png" alt="rank" />
                  </div>
                </div>
              </div>
              <div className="card-footer"></div>
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
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
      <form action="" className="edit-form">
        <fieldset>
          <label htmlFor="input-name">Name:</label>
          <input type="text" id="input-name" />
          <label htmlFor="input-details">Details:</label>
          <input type="text" id="input-details" />
        </fieldset>
      </form>
    </>
  );
};

export default App;
