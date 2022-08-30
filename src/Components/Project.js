import React from 'react'

const Project = ({item}) => {
  return (
    <div className="project">
        <div className="project-container">
            <div className="project-left">
                <h2 className="project-title">
                    {item.title}
                </h2>
                <p className='project-desc'>
                    {item.desc}
                </p>
                <nav className="project-nav">
                    <a href={item.liveLink} className="project-nav-a" target="_blank" rel='noreferrer'>See Live</a>
                    <a href={item.githubLink} className="project-nav-a" target="_blank" rel='noreferrer'>Source Code</a>
                </nav>
            </div>
            <div className="project-right">
                <img src={item.img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Project