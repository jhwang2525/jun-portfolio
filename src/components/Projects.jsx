import React from 'react';
import progress from '../assets/progress.jpeg';
import note from '../assets/note.jpeg';
import form from '../assets/form.png';
import tracker from '../assets/tracker.jpeg';
import taskinator from '../assets/taskinator.jpeg';
import landingpage from '../assets/landingpage.jpeg';


const Projects = () => {
  return (
<div name='projects' className='w-full md:h-screen text-gray-300 bg-[#2E3047]'>
  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
      <p className='text-4xl orbitron font-bold inline border-b-4 text-gray-300 border-[#3bba9c]'>Projects</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div style={{ backgroundImage: `url(${progress})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider justify-center'>
              Progress-bar
            </span>
            <div className='pt-8 text-center'>
              <a href='https://jhwang2525.github.io/progress-steps/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/jhwang2525/progress-steps'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>

            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${note})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider justify-center'>
              Note Taker
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>

            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${form})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider justify-center'>
    Input Form
  </span>
  <div className='pt-8 text-center'>
    <a href='https://jhwang2525.github.io/input-form/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='https://github.com/jhwang2525/input-form'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>

  </div>
</div>
</div>
<div style={{ backgroundImage: `url(${tracker})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider justify-center'>
    Budget Tracker
  </span>
  <div className='pt-8 text-center'>
    <a href='/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='https://github.com/jhwang2525/budget-tracker'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>

  </div>
</div>
</div>
<div style={{ backgroundImage: `url(${landingpage})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider justify-center'>
    Split-landing page
  </span>
  <div className='pt-8 text-center'>
    <a href='https://jhwang2525.github.io/split-landing-page/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='https://github.com/jhwang2525/split-landing-page'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>

  </div>
</div>
</div>
<div style={{ backgroundImage: `url(${taskinator})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider justify-center'>
    Taskinator
  </span>
  <div className='pt-8 text-center'>
    <a href='https://jhwang2525.github.io/taskinator/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='https://github.com/jhwang2525/taskinator'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>

  </div>
</div>
</div>
      </div>
    </div>
  </div>

  )
}

export default Projects
