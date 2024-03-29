import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOurlineMail, HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Jun from '../assets/jun.png'
import {Link} from 'react-scroll'
import myFile from "../assets/resume.pdf"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 orbitron bg-[#2E3047] text-gray-300'>
      <div>
        <img src={Jun} alt="Logo Image" style={{width: '50px'}}/>
      </div>

      {/* menu */}
        <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>
          About
        </Link>
            </li>
            <li>
            <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
            </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2E3047] flex flex-col justify-center items-center'}>
            <li className='py-6 text text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
            </li>
            <li className='py-6 text text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
            </li>
            <li className='py-6 text text-4xl'>
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
          Projects
        </Link>
            </li>
            <li className='py-6 text text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
            </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/jun-hwang-834951207/">
                Linkedin <FaLinkedin size={30}/>
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://github.com/jhwang2525">
                Github <FaGithub size={30}/>
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="mailto:jhwang2525@gmail.com">
                Email <HiOutlineMail size={30}/>
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href={myFile}>
                Resume <BsFillPersonLinesFill size={30}/>
            </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
