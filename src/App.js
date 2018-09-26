import React, { Component } from "react";

import styles from "./AutoPrefixApp.module.css";

import AppCoins from './imgs/AppCoins.svg';
import Ethos from './imgs/Ethos.svg';
import IOTA from './imgs/IOTA.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={styles.bg}/>
        <header>
          <a href="#">Cyrpto World</a>
        </header>
        <main>
          <section className={styles.card}>
              <ul>
                {App.coins.map((coinName, index) => (
                   <li key={index}>
                    <img src={coinName.image} alt={coinName.name}/>
                      <strong>{coinName.name}</strong>
                      <p> Lorem ipsum dolor sit amet, pri te augue.</p>
                    </li>
                ))}
              </ul>
          </section>

          <section className={styles.primary}>
              <h1>Make Money</h1>
              <p> What are you waiting for</p>
              <a href="#">Click Here to start</a>
          </section>
        </main>
      </div>
    );
  }
}


App.coins = [
    {
      image: AppCoins,
      name: "AppCoins"
    },
    {
      image: Ethos,
      name: "Ethos"
    },
    {
      image: IOTA,
      name: "IOTA"
    },
  ]

export default App;
