import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div  name='home' className='w-full h-screen gradient-bg'>
      Home
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-7xl font-bold text-[#ccd6f6]'>Jun Hwang</h1>
        <h2 className='text-3xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer </h2> 
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Front-end developer with passion for creating engaging and user-friendly digital experience.
        I'm eager to apply my skills and continue learning and collaboarting with experienced developers and designers
         to develop my skills further and contribute to meaningful projects.</p>
         <div>
         <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work <HiArrowNarrowRight className='ml-3'/></button>
       </div>
      </div>

    </div>
  )
}

export default Home
