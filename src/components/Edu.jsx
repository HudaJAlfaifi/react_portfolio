import React, { useEffect, useState } from 'react';


export const Edu = () => {
  const [isScrolling, setScrolling] = useState(false);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isScrolling) {
        setScrolling(true);

        // After 1 second (1000 milliseconds), you can set isScrolling to false
        setTimeout(() => {
          setScrolling(false);
          setVisible(true);
        }, 500);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  // This useEffect hides the content after 5 seconds (adjust as needed)
  useEffect(() => {
    if (isVisible) {
      const hideContentTimeout = setTimeout(() => {
        setVisible(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(hideContentTimeout);
    }
  }, [isVisible]);

  return (
    <div name='Education' className='w-full mx-auto h-screen bg-[#0a192f]'>
              {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
       
      <div className='max-w-[900px] mx-auto px-8 grid grid-cols-2 gap-20 justify-center h-auto relative'>
        <div className='border-l-2 border-orange-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2'></div>

        {isVisible && (
          <div className='col-start-1 text-center bg-blue-300 text-white p-1 rounded-lg mb-2 relative fade-in-left'>
            <div className='text-xs'>
            Oct 2023<br></br>
            Imam Mohammed Bin Saud Islamic University <br></br> 
            M.Sc. in Computer Science<br></br> GPA : 4.43 <br></br>
            Paper of thesis<br></br>
           
                <div className='flex justify-center items-center'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-orange-400'>
          <a href="https://thesai.org/Publications/ViewPaper?Volume=13&Issue=5&Code=IJACSA&SerialNo=68">
                Paper Link</a> 
          </button>
        </div>


            </div>
            <div className='absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-blue-300'></div>
          </div>
        )}

        <div></div>

        {isVisible && (
          <div className='col-start-2 col-end-3 text-center bg-blue-300 text-white p-1 rounded-lg mb-2 relative fade-in-right'>
            <div className='text-xs'>
            Imam Mohammed Bin Saud Islamic University<br></br>
            B.S. in Computer Science <br></br>GPA : 4.88
            </div>
            <div className='absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-blue-300'></div>
          </div>
        )}
      </div>
      </div>
      </div>
      </div>
  );
};

export default Edu;
