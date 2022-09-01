import React from 'react'
import Project from './Project'
import Data from '../project-data'

const Projects = () => {
  return (
    <div className="projects" id='projects'>
        <h1 className="project-header" data-aos="fade-in" data-aos-duration="800" data-aos-easing="ease-in" data-aos-once="true">
            projects
        </h1>
        <div className="projects-container">
            {Data.map((item) => {
                return (<Project item={item} key={item.id} />)
            })}
        </div>
    </div>
  )
}

export default Projects