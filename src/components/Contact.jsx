import React from 'react'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#2E3047] flex justify-center items-center p-4'>

            <div className='pb-8'>
                <p className='text-4xl orbitron font-bold inline border-b-4 border-[#3bba9c] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 flex prompt'> <HiOutlineMail size={30}/>jhwang2525@gmail.com</p>
                <p className='text-gray-300 py-4 flex prompt'> <FaGithub size={30}/>github.com/jhwang2525</p>
                <p className='text-gray-300 py-4 flex prompt'> <FaLinkedin size={30}/>linkedin.com/in/jun-hwang-834951207/</p>

            </div>
      
    </div>
  )
}

export default Contact
