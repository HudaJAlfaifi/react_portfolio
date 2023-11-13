import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,

 
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Huda from '../assets/coda.png';
import { Link } from 'react-scroll';




const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-10 bg-[#121212] text-gray-300 ' style={{ zIndex: 100 }}>
    <div className='flex justify-between items-center'>
      <img src={Huda} alt="Huda" style={{ width: '50px' }} />
     
        <span class="text-orange-200 text-2xl">M</span>
        <span class="text-orange-500 text-xl">y</span>
        <span class="text-white text-xl">P</span>
        <span class="text-blue-400 text-2xl font-bold">o</span>
        <span class="text-white text-xl">rtf</span>
        <span class="text-blue-400 text-2xl font-bold">o</span>
        <span class="text-white text-xl">li</span>
        <span class="text-blue-400 text-2xl font-bold">o</span>
 

    </div>




    {/* menu */}
    <ul className=' hidden md:flex'>
        <li className='hover:text-blue-100 '>
        <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-blue-100 '>
        <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-blue-100 '>
        
        <Link to='Education' smooth={true} duration={500}>
        Education
          </Link>
        </li>
        <li className='hover:text-blue-100 '>
        <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-blue-100 '>
        <Link to='work' smooth={true} duration={500}>
            Projects
          </Link>

        </li>
        <li className='hover:text-blue-100 '>
        
        <Link to='contact' smooth={true} duration={500}>
        Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

{/* Mobile menu */}
    <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#121212] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-2xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-2xl'>
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-2xl'>
        <Link onClick={handleClick} to='Education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='py-6 text-2xl'>
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-2xl'>
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-2xl'> 
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
</ul>
{/* Social icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='https://www.linkedin.com/in/huda-alfaifi'target="_blank" rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='https://github.com/HudaJAlfaifi' target="_blank" rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fb7a3e]'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='mailto:hudaalfaifi@outlook.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='/Huda2.pdf' target="_blank" rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>


    </div>
    
  )
}

export default Navbar