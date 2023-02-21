import React from 'react';
import { images } from '../../constants';
import { GrStackOverflow } from 'react-icons/gr'
import { AiFillGithub, AiFillLinkedin, AiFillYahoo, AiOutlineCloseCircle } from 'react-icons/ai'
import { SocialIcon } from 'react-social-icons';
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
        <li className="p__opensans"><a href="#project">Projects</a></li>
        <li className="p__opensans"><a href="#skills">Skills</a></li>
        <li className="p__opensans"><a href="#experience">Experience</a></li>
      </ul>
      <div>
        <a href='https://github.com/'>
          <AiFillGithub size="2rem" style={{ color: 'white', marginInlineEnd: '1rem' }}/>
        </a>
        <a href='https://www.linkedin.com/'>
          <AiFillLinkedin size="2rem" style={{ color: 'white', marginInlineEnd: '1rem' }}/>
        </a>
        <a href='https://mail.yahoo.com/'>
          <AiFillYahoo size="2rem" style={{ color: 'white', marginInlineEnd: '1rem' }}/>
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GrStackOverflow color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
              <li><a href="#project" onClick={() => setToggleMenu(false)}>Portfolios</a></li>
              <li><a href="#experience" onClick={() => setToggleMenu(false)}>Experience</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;