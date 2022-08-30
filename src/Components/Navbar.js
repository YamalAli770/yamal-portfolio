import React from 'react'
import {FaLinkedinIn, FaGithub, FaFile} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar">
        <nav className="logos">
            <a href="https://www.linkedin.com" className='logo' target="_blank" rel='noreferrer'>
                <FaLinkedinIn />
            </a>
            <a href="https://www.github.com" className='logo' target="_blank" rel='noreferrer'>
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com" className='logo' target="_blank" rel='noreferrer'>
                <FaFile />
            </a>
        </nav>
    </div>
  )
}

export default Navbar