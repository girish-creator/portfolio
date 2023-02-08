import React from 'react';
import { images } from '../../constants';
import { GrStackOverflow } from 'react-icons/gr'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.radial} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#portfolios">Portfolios</a></li>
        <li className="p__opensans"><a href="#skills">Skills</a></li>
        <li className="p__opensans"><a href="#experiance">Experiance</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Explore</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GrStackOverflow color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#portfolios" onClick={() => setToggleMenu(false)}>Portfolios</a></li>
              <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
              <li><a href="#experiance" onClick={() => setToggleMenu(false)}>Experiance</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;