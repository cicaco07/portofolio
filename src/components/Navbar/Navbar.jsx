import React, { useState } from 'react'
import Link from 'next/link';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 return (
    <>
      <nav className="md:flex items-center justify-center hidden">
        <div className='flex justify-center fixed top-0 backdrop-blur bg-accent/50 my-6 rounded-full shadow-md z-50'>
          <ul className='flex px-10 py-4 gap-12 text-lg text-common'>
            <li>
              <Link href='#'>
                Home 
              </Link>
            </li>
            <li>
              <Link href='#about'>
                About 
              </Link>
            </li>
            <li>
              <Link href='#project'>
                Project 
              </Link>
            </li>
            <li>
              <Link href='#skills'>
                Skills
              </Link>
            </li>
            
            <li>
              <Link href='#contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="flex items-center justify-end md:hidden">
        <div className='flex justify-center fixed top-0 right-10 my-6 bg-white w-10 h-10 rounded-full shadow-md z-50'>
          <div className='flex items-center justify-center'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <i className="fa fa-times text-black"></i>  
            ) : (
              <i className="fa fa-bars text-black"></i>
            )}
            </button>
          </div>
        </div>
        {menuOpen && (
            <div className='fixed top-0 mr-20 mt-6 w-56 bg-primary shadow-md py-4 rounded-md z-50'>
              <ul className='space-y-4 text-lg text-common text-start pl-6'>
                <li>
                 <Link href='#'>
                    Home 
                 </Link>
                </li>
                <li>
                 <Link href='#about'>
                    About 
                 </Link>
                </li>
                <li>
                 <Link href='#project'>
                    Project 
                 </Link>
                </li>
                <li>
                 <Link href='#skills'>
                    Skills
                 </Link>
                </li>
                <li>
                 <Link href='#experience'>
                    Experience
                 </Link>
                </li>
                <li>
                 <Link href='#contact'>
                    Contact
                 </Link>
                </li>
              </ul>
            </div>
        )}
        </nav>
    </>
    
 )
}

export default Navbar