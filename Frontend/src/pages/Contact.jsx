import React from 'react'

const Contact = () => {
  return (
    <section> 
       <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-18 leading-30 font-400 text-textColor mt-18'>
          Got a technical issue? Want to send feedback about a beta feature? Let us Know
        </p>
        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email" className='text-textColor font-semibold text-16px mb-2'>
              Your Email
            </label>
            <input type="email"
            id='email'
            placeholder='example@gmail.com'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' />
          </div>

          <div>
            <label htmlFor="subject" className='text-textColor font-semibold text-16px mb-2'>
              Subject
            </label>
            <input type="text"
            id='subject'
            placeholder='Let us know how we can help you'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' />
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor="message" className='text-textColor font-semibold text-16px mb-2'>
              Your Message
            </label>
            <textarea 
            rows='6'
            type="text"
            id='message'
            placeholder='Leave a comment....'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' />
          </div>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm-w-fit'>
            Submit
          </button>
        </form>
        </div>
        </section>
  
  )
}

export default Contact