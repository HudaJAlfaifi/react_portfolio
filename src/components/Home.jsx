import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-500 text-xl text-left'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-left text-white'>
          Huda Jabir
        </h1>
        <div className='w-max'>
        <h2 className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl font-bold" text-[#8892b0]'>
        Web Developer.
        </h2>
        </div>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-left'>
          I’m a full-stack developer |.Net |Ract, I’m focused on
          building responsive full-stack web applications, and Android Kotlin developer.
        </p>
        

      </div>
    </div>
  )
}

export default Home