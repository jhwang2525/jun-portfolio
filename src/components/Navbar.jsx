import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#02192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
      </div>

      {/* menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

      {/* Hamburger */}
      <div className='hidden'>
        <FaBars />
      </div>
      {/* Mobile menu */}
      <div className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
      </div>

      {/* Social icons */}
      <div className='hidden'></div>
    </div>
  )
}

export default Navbar
