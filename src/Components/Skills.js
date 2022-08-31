import React from 'react'
import Skill from './Skill'
import Data from '../skills-data';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <div className="skills-title">
            <h1>Skills</h1>
        </div>
        <div className="skills-images-container">
            {Data.map((item) => {
                return (<Skill item={item} key={item.id} />)
            })}
        </div>
    </div>
  )
}

export default Skills