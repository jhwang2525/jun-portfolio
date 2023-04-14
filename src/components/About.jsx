import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2E3047] text-gray-300'> 
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl orbitron font-bold inline border-b-4 border-[#3bba9c]'>About</p>
            </div>
            <div>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-4xl orbitron font-bold'>
                <p>Hi, I'm Jun nice to meet you</p>
              </div>
              <div>
                <p className='prompt'>I'm a front-end developer with a passion for creating beautiful and intuitive user interfaces. I recently completed the full stack web development bootcamp at UCLA.
                I am always eager to learn new technologies and frameworks to improve my skills and stay up-to-date with the latest industry trends.


</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default About
