import React from 'react';

import ironImageSolitude from './ironImageSolitude.jpg';

import './App.css';
import IronImage from './IronImage/IronImage';

// ironImageSolitude HD URL
const hdUrlSolitude = `https://images.unsplash.com/photo-1504511045-dc6e5c9bea25?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a88ada821297d024419edbf111a244e7`;

const App = () => (
  <div className="app">
    <div className="app-iron-image-container">
      <div className="solitude__image-container">
        <IronImage placeholder={ironImageSolitude} src={hdUrlSolitude} />
      </div>

      <div className="solitude__text-container">
        <h2 className="solitude__title">Beauty of Solitude</h2>
        <p className="solitude__text-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  </div>
);

export default App;
