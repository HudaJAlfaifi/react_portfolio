import React from 'react';


export const Education = () => {


  return (
    <div name='Education' className='w-full h-[1100px] bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
          
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
            Education
          </p>
        </div>
        <div></div>
        </div>
       
      <div className='py-5 pb-40 max-w-[900px] mx-auto px-8 sm:grid grid-cols-2 gap-20 justify-center h-auto relative'>
        <div className='border-l-2 border-orange-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2 hidden sm:block'>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 shadow-md shadow-[#040c16] rounded-full"></div>

        </div>
          
          <div className='col-start-1 text-center bg-blue-400 text-white p-4 rounded-lg mb-2 relative fade-in-left '>
            <div className='text-s'>
            Oct 2023<br></br>
            Imam Mohammed Bin Saud Islamic University <br></br> 
            M.Sc. in Computer Science<br></br> GPA : 4.43 <br></br>
            Paper of thesis<br></br>
           
                <div className='py-4 flex justify-center items-center'>
                <button type="button" class=" text-white bg-orange-400 hover:bg-orange-500 shadow-md shadow-[#040c16] hover:scale-110 duration-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
          <a href="https://thesai.org/Publications/ViewPaper?Volume=13&Issue=5&Code=IJACSA&SerialNo=68">
                Paper Link</a> 
          </button>
        </div>


            </div>
            <div className='absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-blue-400'></div>
          </div>
 

        <div></div>


          <div className='col-start-2 col-end-3 text-center bg-blue-400 text-white p-4 rounded-lg mb-2 relative fade-in-right shadow-md  '>
            <div className='text-base'>
            Imam Mohammed Bin Saud Islamic University<br></br>
            B.S. in Computer Science <br></br>GPA : 4.88
            </div>
            <div className='absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-blue-400'></div>
          </div>

      </div>
      </div>
      </div>
  );
};

export default Education;
