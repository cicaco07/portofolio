import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='py-20' id='skills'>
      <h1 className='text-center py-10 font-bold text-5xl'>Skills</h1>
      <div className='flex w-full justify-center'>
      <div className='w-full max-w-xl flex justify-center mb-16'>
          <p className='text-lg font-medium'>
          These are the technologies i&apos;ve worked with 
          </p>
        </div>
        </div>
      <div className='flex w-full justify-center'>
        <div className='w-full max-w-6xl flex flex-wrap gap-20 justify-center'>
          <div className='bg-secondary p-10 rounded-xl text-common'>
            <Image src="/icons/icons8-tailwind-css-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium'>Tailwind CSS</span>
          </div>
          <div className='bg-secondary p-10 rounded-xl text-common'>
            <Image src="/icons/icons8-bootstrap-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium'>Bootstrap</span>
          </div>
          <div className='bg-secondary p-10 rounded-xl text-common'>
            <Image src="/icons/icons8-react-js-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium'>React</span>
          </div>
          <div className='bg-secondary p-10 rounded-xl text-common'>
            <Image src="/icons/icons8-laravel-96.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium'>Laravel</span>
          </div>
          <div className='bg-secondary p-10 rounded-xl text-common'>
            <Image src="/icons/icons8-figma-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium'>Figma</span>
          </div>
          <div className='bg-secondary p-10 rounded-xl text-common'>
            <Image src="/icons/icons8-mysql-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium'>MySQL</span>
          </div>
          <div className='bg-secondary p-10 rounded-xl text-common'>
            <Image src="/icons/icons8-javascript-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium text-common'>Javascript</span>
          </div>
          <div className='bg-secondary p-10 rounded-xl text-common'>
            <Image src="/icons/icons8-nextjs-240.png" alt="" width="90" height="90" className=''/>
            <span className='justify-center flex font-medium'>NextJS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
