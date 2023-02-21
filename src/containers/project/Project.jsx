import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './project.css';

const Project = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__project flex__center">
      <div className="app__project-content">
        <SubHeading title="Projects" />
        <h1 className="headtext__cormorant">Photo Project</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__project-images">
        <div className="app__project-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__project-images_card flex__center" key={`project_image-${index + 1}`}>
              <img src={image} alt="project_image" />
              <BsInstagram className="project__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__project-images_arrows">
          <BsArrowLeftShort className="project__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="project__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Project;