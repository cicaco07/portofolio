import React from 'react'

const Contact = () => {
  return (
    <div className='py-20 text-center' id='contact'>
      <h1 className='text-center py-10 font-bold text-5xl'>Contact</h1>
      <div className='flex w-full justify-center'>
        <div className='w-full max-w-xl flex justify-center mb-16'>
          <p className='text-lg font-medium'>
          Additionally, I&apos;m currently open for freelance or part-time opportunities. 
          If you have an interesting project or need extra hands on deck, don&apos;t hesitate to get in touch!
          <br/><br/>Feel free to get in touch with me whenever you need assistance or want to discuss anything. 
          I&apos;m here to help you with pleasure! 
          </p>
        </div>
      </div>
      
      <div className='flex justify-center'>
        <div className='py-2'>
          <div className='flex gap-2'>
            <div className='py-2'>
              <input type="text" placeholder="First name" className="input input-lg input-bordered w-full max-w-xs bg-white text-black"/>
            </div>
            <div className='py-2'>
              <input type="text" placeholder="Last name" className="input input-lg input-bordered w-full max-w-xs bg-white text-black"/>
            </div>
          </div>
          <div className='flex py-2'>
            <input type="email" placeholder="Your-email" className="input input-lg input-bordered w-full max-w-lg bg-white text-black"/>
          </div>
          <div className='flex py-2'>
            <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg w-full max-w-lg bg-white text-black"></textarea>
          </div>
          <div className='flex justify-start'>
            <button className="btn btn-primary btn-md justify-start rounded-full text-lg my-1 px-6">Submit</button>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <span className='text-sm'>© 2023 Aryo Deva Saputra. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Contact
