import React from 'react';
import './skill.css';

const Skill = () => (
  <div className="app__skills">
    <h1>My Projects</h1>
    <div className='app__skills-projects'>
      <div class="set-size charts-container">
        <div class="pie-wrapper progress-45 style-2">
          <span class="label">45<span class="smaller">%</span></span>
          <div class="pie">
            <div class="left-side half-circle"></div>
            <div class="right-side half-circle"></div>
          </div>
          <div class="shadow"></div>
        </div>
        <div class="pie-wrapper progress-75 style-2">
          <span class="label">75<span class="smaller">%</span></span>
          <div class="pie">
            <div class="left-side half-circle"></div>
            <div class="right-side half-circle"></div>
          </div>
          <div class="shadow"></div>
        </div>
      </div>

    </div>

  </div>
);

export default Skill;