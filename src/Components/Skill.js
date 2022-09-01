import React from 'react';

const Skill = ({item}) => {
  return (
    <div className="skill">
        <img src={item.link} alt="skill" />
        <h2>{item.title.toUpperCase()}</h2>
    </div>
  )
}

export default Skill