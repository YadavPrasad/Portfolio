import React from 'react'
import './Navbar.css'
import logo from '../../assets/YadavPrasad.jpg'
import resume from '../../assets/Resume.pdf'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} className='spin' style = {{borderRadius : '100px', height : '50px', marginLeft : '-150px', marginTop : '-10px'}}alt="" />
            <ul className = "nav-menu">
                <li className='resume'>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                    </li>                
                <li className = 'contact'>Contact</li>                              
            </ul>
        </div>
    )
}
export default Navbar;