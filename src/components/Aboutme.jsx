import React from 'react'

const Aboutme = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold" text-[#8892b0]'>
            <p>Hi. I'm Huda, nice to meet you. Please take a brief overview about me.</p>
          </div>
          <div>
            <p className='sm:text-left ' >      I am a web developer and Android developer with a strong knowledge of programming languages such as 
      HTML, CSS, JavaScript, Android_kotlin_
       and C#. I also have experience with frameworks like ASP.NET and React. Additionally,
        I have expertise in developing backend services using Microsoft SQL Server and RESTful API. 
        I am always eager to tackle technical challenges and turn ideas into reality
         through programming. Furthermore,
          I hold a Master's degree in Computer Science,which provides me with a deep understanding of web technologies .</p>  
          </div>
        </div>
    </div>
  </div>

  )
}

export default Aboutme