import React from 'react'
import { motion } from 'framer-motion'

const About = () => {

  return (
    <motion.section 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className='text-center py-20 md:py-28' 
      id='about'
    >
      <h1 className='text-3xl md:text-5xl font-bold py-10'>
        🚀About Me
      </h1>
      <div className='flex w-full justify-center'>
        <div className='w-full max-w-xl flex justify-center'>
          <p className='text-md px-10 md:px-0 md:text-lg font-medium'>
          Hello, I&apos;m Aryo Deva Saputra! I am a student at State Polytechnic of Malang. My expertise
          includes proficiency in programming languages such as Java, PHP and Javascript, as well as a deep 
          understanding of database management systems like MySQL.
          </p>
        </div>
      </div>
      
      
    </motion.section>
  )
}

export default About
