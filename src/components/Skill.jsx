import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Csharp from '../assets/csharp1.png';
import Net from '../assets/dotnet_logo.png';
import python from '../assets/Python-logo.png';
import SQLite from '../assets/SQLite.png';
import MSQL from '../assets/MSQL.png';
import stodio from '../assets/stodio.png'

const Skill = () => {
  return (
    <div name='skills' className='w-full  bg-[#0a192f] text-gray-300 sm:h-[1000px] md:h-[1000px] lg:h-[1000px] xl:h-[1000px] pt-20'>
      {/* Container */}
      <div className='py-9 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-orange-500 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JAVASCRIPT icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Net} alt="Net icon" />
                  <p className='my-4'>.Net MVC</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Csharp} alt="Csharp icon" />
                  <p className='my-4'>C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="PYTHON icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SQLite} alt="SQLite icon" />
                  <p className='my-4'>SQLite</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MSQL} alt="SQL icon" />
                  <p className='my-4'>Microsoft SQL SERVER</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={stodio} alt="Android icon" />
                  <p className='my-4'>Android Stodio</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Skill