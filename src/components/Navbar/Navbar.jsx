import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import 'font-awesome/css/font-awesome.min.css';
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  
  const variants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
 };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
  
    function navScroll() {
      const scrollY = window.pageYOffset;
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          const sectionId = current.getAttribute('id');
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveMenu(sectionId);  
          }
        }
      );
  }
  
  window.addEventListener('scroll', navScroll); 
  return () => window.removeEventListener('scroll', navScroll);

  }, []);

  return (
    <AnimatePresence>
      <motion.nav 
        className="md:flex items-center justify-center hidden"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <div className='flex justify-center fixed top-0 backdrop-blur bg-accent/50 my-6 rounded-full shadow-md z-50'>
          <ul className='flex px-10 py-4 gap-12 text-lg text-common'>
            <li>
              <Link href='#home' onClick={() => setActiveMenu('home')}>
                <span className={activeMenu === 'home' ? 'font-bold' : ''}>Home</span>
              </Link>
            </li>
            <li>
              <Link href='#about' onClick={() => setActiveMenu('about')}>
                <span className={activeMenu === 'about' ? 'font-bold' : ''}>About</span>
              </Link>
            </li>
            <li>
              <Link href='#projects' onClick={() => setActiveMenu('projects')}>
                <span className={activeMenu === 'projects' ? 'font-bold' : ''}>Projects</span>
              </Link>
            </li>
            <li>
              <Link href='#skills' onClick={() => setActiveMenu('skills')}>
                <span className={activeMenu === 'skills' ? 'font-bold' : ''}>Skills</span>
              </Link>
            </li>
            
            <li>
              <Link href='#contact' onClick={() => setActiveMenu('contact')}>
                <span className={activeMenu === 'contact' ? 'font-bold' : ''}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
      <nav className="flex items-center justify-end md:hidden">
        <div className='flex justify-center fixed top-0 right-6 my-6 bg-white w-10 h-10 rounded-full shadow-md z-50'>
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
              <ul className='space-y-4 text-md text-common text-start pl-6'>
                <li>
                  <Link href='#home' onClick={() => setActiveMenu('home')}>
                    <span className={activeMenu === 'home' ? 'font-bold' : ''}>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href='#about' onClick={() => setActiveMenu('about')}>
                    <span className={activeMenu === 'about' ? 'font-bold' : ''}>About</span>
                  </Link>
                </li>
                <li>
                <Link href='#projects' onClick={() => setActiveMenu('projects')}>
                  <span className={activeMenu === 'projects' ? 'font-bold' : ''}>Projects</span>
                </Link>
                </li>
                <li>
                <Link href='#skills' onClick={() => setActiveMenu('skills')}>
                  <span className={activeMenu === 'skills' ? 'font-bold' : ''}>Skills</span>
                </Link>
                </li>
                <li>
                <Link href='#contact' onClick={() => setActiveMenu('contact')}>
                  <span className={activeMenu === 'contact' ? 'font-bold' : ''}>Contact</span>
                </Link>
                </li>
              </ul>
            </div>
        )}
        </nav>
    </AnimatePresence>
    
 )
}

export default Navbar