import React from 'react';
import './header.css';
import { images } from '../../constants';

const Header = () => (
  <div className="app__header">
    <div className="app__header-content">
      <h1 className="gradient__text">Learning never exhausts the mind</h1>
      <p>Portfolios shows what you have and what you don't have.</p>

      <div className="app__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="app__header-content__people">
        <img src={images.people} />
      </div>
    </div>
    
    <div className="app__header-image">
      <img src={images.ai} />
    </div>
  </div>
);

export default Header;