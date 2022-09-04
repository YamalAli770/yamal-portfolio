import React, { useContext } from 'react'
import { FaLinkedinIn, FaGithub, FaFile } from 'react-icons/fa'
import { ThemeContext } from '../App'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
    const theme = useContext(ThemeContext);
    return (
        <div className="navbar">
            <nav className="logos">
                {theme.theme === "dark-theme" ? <FaSun onClick={theme.toggleTheme} className='logo' /> : <FaMoon onClick={theme.toggleTheme} className='logo' />}
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