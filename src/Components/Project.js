import React from 'react'

const Project = ({item}) => {
  return (
    <div className="project">
        <div className="project-container">
            <div className="project-left" data-aos="fade-right" data-aos-duration="900" data-aos-easing="ease-in" data-aos-once="true">
                <h2 className="project-title">
                    {item.title}
                </h2>
                <p className='project-desc'>
                    {item.desc}
                </p>
                {item.note ? (<p className='project-note'>Note: {item.note}</p>) : null}
                <nav className="project-nav">
                    {item.liveLink ? (<a href={item.liveLink} className="project-nav-a" target="_blank" rel='noreferrer'>See Live</a>) : null}
                    <a href={item.githubLink} className="project-nav-a" target="_blank" rel='noreferrer'>Source Code</a>
                </nav>
            </div>
            <div className="project-right" data-aos="fade" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in" data-aos-once="true">
                <img src={item.img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Project