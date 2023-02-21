import React from 'react';
import './header.css';
import { images } from '../../constants';

const Header = () => (
  <div className="app__header">
    <div id="stars-group-1"></div>
    <div id="stars-group-2"></div>
    <div id="stars-group-3"></div>
    <div id="stars-group-4"></div>
    <div id="stars-group-5"></div>
    <div id="stars-group-6"></div>
    <div className="app__header-content">
      <h1 className="gradient_text">Learning never exhausts the mind</h1>
      <p>Portfolios shows what you have and what you don't have. Its a great way to connect with people.</p>
    </div>
    
    <div className="app__header-image">
      <img src={images.ai_auto} />
    </div>
  </div>
);

export default Header;