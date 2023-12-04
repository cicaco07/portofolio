import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Skills = () => {
  
  return (
    <section className='py-20' id='skills'>
      <h1 className='text-center py-10 font-bold text-3xl md:text-5xl'>Skills✨</h1>
      <div className='flex w-full justify-center'>
      <div className='w-full max-w-xl flex justify-center mb-16'>
          <p className='text-md md:text-lg font-medium'>
          These are the technologies i&apos;ve worked with 
          </p>
        </div>
        </div>
      <div className='flex w-full justify-center'>
        <div className='w-full max-w-6xl flex flex-wrap gap-10 md:gap-20 justify-center'>
          <motion.div className='bg-secondary p-6 md:p-10 rounded-xl text-common' 
            initial={{ y: 50, opacity: 0, boxShadow: "20px 20px 0" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
              {
                y: -5,
                x: -5,
                boxShadow: "25px 25px 0",
                duration: "0.1"
              }
            }
          >
            <Image src="/icons/icons8-tailwind-css-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium md:font-semibold'>Tailwind CSS</span>
          </motion.div>
          <motion.div className='bg-secondary p-6 md:p-10 rounded-xl text-common' 
            initial={{ y: 50, opacity: 0, boxShadow: "20px 20px 0" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
              {
                y: -5,
                x: -5,
                boxShadow: "25px 25px 0",
                duration: "0.1"
              }
            }
          >
            <Image src="/icons/icons8-bootstrap-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium md:font-semibold'>Bootstrap</span>
          </motion.div>
          <motion.div className='bg-secondary p-6 md:p-10 rounded-xl text-common' 
            initial={{ y: 50, opacity: 0, boxShadow: "20px 20px 0" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
              {
                y: -5,
                x: -5,
                boxShadow: "25px 25px 0",
                duration: "0.1"
              }
            }
          >
            <Image src="/icons/icons8-react-js-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium md:font-semibold'>React</span>
            </motion.div>
          <motion.div className='bg-secondary p-6 md:p-10 rounded-xl text-common' 
            initial={{ y: 50, opacity: 0, boxShadow: "20px 20px 0" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
              {
                y: -5,
                x: -5,
                boxShadow: "25px 25px 0",
                duration: "0.1"
              }
            }
          >
            <Image src="/icons/icons8-laravel-96.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium md:font-semibold'>Laravel</span>
          </motion.div>
          <motion.div className='bg-secondary p-6 md:p-10 rounded-xl text-common' 
            initial={{ y: 50, opacity: 0, boxShadow: "20px 20px 0" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
              {
                y: -5,
                x: -5,
                boxShadow: "25px 25px 0",
                duration: "0.1"
              }
            }
          >
            <Image src="/icons/icons8-figma-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium md:font-semibold'>Figma</span>
          </motion.div>
          <motion.div className='bg-secondary p-6 md:p-10 rounded-xl text-common' 
            initial={{ y: 50, opacity: 0, boxShadow: "20px 20px 0" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
              {
                y: -5,
                x: -5,
                boxShadow: "25px 25px 0",
                duration: "0.1"
              }
            }
          >
            <Image src="/icons/icons8-mysql-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium md:font-semibold'>MySQL</span>
          </motion.div>
          <motion.div className='bg-secondary p-6 md:p-10 rounded-xl text-common' 
            initial={{ y: 50, opacity: 0, boxShadow: "20px 20px 0" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
              {
                y: -5,
                x: -5,
                boxShadow: "25px 25px 0",
                duration: "0.1"
              }
            }
          >
            <Image src="/icons/icons8-javascript-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium md:font-semibold'>Javascript</span>
          </motion.div>
          <motion.div className='bg-secondary p-6 md:p-10 rounded-xl text-common' 
            initial={{ y: 50, opacity: 0, boxShadow: "20px 20px 0" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
              {
                y: -5,
                x: -5,
                boxShadow: "25px 25px 0",
                duration: "0.1"
              }
            }
          >
            <Image src="/icons/icons8-nextjs-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium md:font-semibold'>NextJS</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
