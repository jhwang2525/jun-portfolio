import React from 'react';
import project from '../assets/project.png';

const Projects = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div>
           <img className='w-50 mx-auto' src={project} alt="project1" />
           <button className='my-2 text-white border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600'>Project 1</button>
           </div>
            <div>
           <img className='w-50 mx-auto' src={project} alt="project1" />
           <button className='my-2 text-white border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600'>Project 2</button>
           </div>
            <div>
           <img className='w-50 mx-auto' src={project} alt="project1" />
           <button className='my-2 text-white border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600'>Project 3</button>
           </div>
            <div>
           <img className='w-50 mx-auto' src={project} alt="project1" />
           <button className='my-2 text-white border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600'>Project 4</button>
           </div>
            <div>
           <img className='w-50 mx-auto' src={project} alt="project1" />
           <button className='my-2 text-white border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600'>Project 5</button>
           </div>
            <div>
           <img className='w-50 mx-auto' src={project} alt="project1" />
           <button className='my-2 text-white border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600'>Project 6</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Projects