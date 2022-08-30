import React from 'react'
import Project from './Project'
import Data from '../project-data'

const Projects = () => {
  return (
    <div className="projects" id='projects'>
        <h1 className="project-header">
            projects
        </h1>
        <div className="projects-container">
            {Data.map((item) => {
                return (<Project item={item} />)
            })}
        </div>
    </div>
  )
}

export default Projects