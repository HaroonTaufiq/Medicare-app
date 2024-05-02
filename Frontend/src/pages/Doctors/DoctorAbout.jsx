import React from 'react'
import { formateDate } from '../../utils/formatDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Tauqeer Abbas
                </span>
            </h3>
            <p className='text-18 leading-30 font-400 text-textColor mt-18  '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolore deleniti! Sed corrupti eum quibusdam placeat,
                 illum minima amet odit impedit totam! Sint dignissimos impedit reiciendis magni culpa consequatur aut
                  debitis eos similique quia! Illo eligendi unde, 
                consectetur in earum aliquid necessitatibus illum odit quos, maxime enim, laudantium perferendis! Nam.
            </p>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                  <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                    {formateDate('09-03-2014')} - {formateDate('07-06-2016')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in surgeon
                    </p>
                  </div>
                  <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Benazir Bhotto hopistal, Rawalpindi
                  </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                  <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate('12-03-2010')} - {formateDate('09-03-2014')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in surgeon
                    </p>
                  </div>
                  <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Benazir Bhotto hopistal, Rawalpindi
                  </p>
                </li>
            </ul>
        </div>
        
        <div className="mt-12"></div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate('09-03-2014')} - {formateDate('07-06-2016')}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Benazir Bhotto hopistal, Rawalpindi
                  </p>
            </li> 
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate('09-03-2014')} - {formateDate('07-06-2016')}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Benazir Bhotto hopistal, Rawalpindi
                  </p>
            </li>
        </ul>
    </div>
  )
}

export default DoctorAbout