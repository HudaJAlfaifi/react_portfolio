import React from 'react'
import {data} from '../data/data'

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

return (
  <div name='work' className='w-full  sm:h-[1000px] md:h-[1000px] lg:h-[1000px] xl:h-[1000px] text-gray-300 bg-[#0a192f] pt-20'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>
        Projects
        </p>
        <p className='py-6'>Check out some of my recent work</p>
      </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* Gird Item */}
        {project.map((item, index) => (
<div
  key={index}
  style={{ backgroundImage: `url(${item.image})` }}
  className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
>
  {/* Hover effect for images */}
  <div className="opacity-0 group-hover:opacity-100 ">
    <span className="text-2xl font bold text-white tracking-wider ">
      {item.name}
    </span>
    <div className="pt-8 text-center ">
      {/* eslint-disable-next-line */}
      <a href={item.github} target="_blank">
      <button type="button" class=" text-white bg-orange-400 hover:bg-orange-500 shadow-md
       shadow-[#040c16] hover:scale-110 duration-500 focus:outline-none focus:ring-4
        focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2
         dark:focus:ring-yellow-900">

          Code
        </button>
      </a>

    </div>
  </div>
</div>
))}


</div>
    </div>
  </div>
);
}

export default Work;