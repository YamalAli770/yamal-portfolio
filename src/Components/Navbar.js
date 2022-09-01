import React, { useContext } from 'react'
import { FaLinkedinIn, FaGithub, FaFile } from 'react-icons/fa'
import { ThemeContext } from '../App'
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
    const theme = useContext(ThemeContext);
    return (
        <div className="navbar">
            <Toggle className='toggle' onClick={theme.toggleTheme} defaultChecked={false} icons={{ checked: <FaMoon />, unchecked: <FaSun /> }} />
            <nav className="logos">
                <a href="https://www.linkedin.com/in/yamalali/" className='logo' target="_blank" rel='noreferrer'>
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/YamalAli770" className='logo' target="_blank" rel='noreferrer'>
                    <FaGithub />
                </a>
                <a href="https://drive.google.com/file/d/15rC0WvqOhVWh_EPGAVHvx-SW0jAW3dR1/view?usp=sharing" className='logo' target="_blank" rel='noreferrer'>
                    <FaFile />
                </a>
            </nav>
        </div>
    )
}

export default Navbar