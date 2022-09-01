import React, { useContext } from 'react'
import Skill from './Skill'
import Data from '../skills-data';
import { ThemeContext } from '../App';

const Skills = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className='skills' id='skills'>
      <div className="skill-curve-top">
        <img src={ theme.theme === "dark-theme" ? 'images/curves/skills-curve-top.png' : 'images/curves/skills-curve-top-light.png'} alt='' />
      </div>
      <div className="skills-title">
        <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-once="true">Skills</h1>
      </div>
      <div className="skills-images-container" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in" data-aos-once="true">
        {Data.map((item) => {
          return (<Skill item={item} key={item.id} />)
        })}
      </div>
      <div className="skill-curve-bottom">
        <img src={ theme.theme === "dark-theme" ? 'images/curves/skills-curve-bottom.png' : 'images/curves/skills-curve-bottom-light.png'} alt="" />
      </div>
    </div>
  )
}

export default Skills