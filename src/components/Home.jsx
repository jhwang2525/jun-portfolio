import {HiArrowNarrowRight} from 'react-icons/hi'
import React, { useState } from 'react';
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div  name='home' className='w-full h-screen bg-[#2E3047]'>
      Home
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#3bba9c] orbitron'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-7xl font-bold text-[#ccd6f6] orbitron'>Jun Hwang</h1>
        <h2 className='text-3xl sm:text-7xl font-bold text-[#8892b0] orbitron '>I'm a Front-End Developer </h2> 
        <p className='text-[#8892b0] py-4 max-w-[700px] prompt'>I'm a Front-end developer with passion for creating engaging and user-friendly digital experience.
        I'm eager to apply my skills and continue learning and collaboarting with experienced developers and designers
         to develop my skills further and contribute to meaningful projects.</p>
         <div>
         <button className='text-white orbitron border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3bba9c] hover:border-[#3bba9c]'>View Work <HiArrowNarrowRight className='ml-3'/>
         <Link to="projects" smooth={true} duration={500}>
         </Link>
         </button>
       </div>
      </div>

    </div>
  )
}

export default Home
