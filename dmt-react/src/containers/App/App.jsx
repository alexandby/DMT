import React from 'react';
import './App.css';

import CardsList from '../../components/CardsList';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <Navbar />
          <section className="games-list">
            <div className="cards cards-list_content">
              <CardsList />
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
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
