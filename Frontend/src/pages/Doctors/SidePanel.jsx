import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text-18 leading-30 font-400 text-textColor mt-18 mt-0 font-semibold'>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                500 
            </span>
        </div>

        <div className='mt-[30px]'>
            <p className='text-18 leading-30 font-400 text-textColor mt-18 mt-0 font-semibold text-headingColor'>
                Available Time Slots:
            </p>
            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Sunday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Thursday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Friday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
            </ul>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full px-2 w-full rounded-md'>
            Book Appointment
        </button>
    </div>
  )
}

export default SidePanel