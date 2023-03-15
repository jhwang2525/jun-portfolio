import React from 'react';
import project from '../assets/project.png';

const Projects = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
      
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div>
           <img className='w-20 mx-auto' src={project} alt="project1" />
           <p className='my-4'>Project 1</p>
           </div>
            <div>
           <img className='w-20 mx-auto' src={project} alt="project1" />
           <p className='my-4'>Project 2</p>
           </div>
            <div>
           <img className='w-20 mx-auto' src={project} alt="project1" />
           <p className='my-4'>Project 3</p>
           </div>
            <div>
           <img className='w-20 mx-auto' src={project} alt="project1" />
           <p className='my-4'>Project 4</p>
           </div>
            <div>
           <img className='w-20 mx-auto' src={project} alt="project1" />
           <p className='my-4'>Project 5</p>
           </div>
            <div>
           <img className='w-20 mx-auto' src={project} alt="project1" />
           <p className='my-4'>Project 6</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
