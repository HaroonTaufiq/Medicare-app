import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonail/Testimonial'

const Doctors = () => {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='container text-center'>
        <h2 className='heading'>Find a Doctor</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor
          ' placeholder='Search Doctor' />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full mt-0 rounded-[0px] rounded-r-md'> 
          Search
           </button>
        </div>
      </div>
      </section>


      <section>
        <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-5'>
    {doctors.map((doctor) => (
      <DoctorCard key={doctor.id} doctor={doctor} />
    ))}
  </div>
        </div>
      </section>

      <section>
      <div className="container">
      <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center mt-[30px]'>What our Patient Say</h2>
          <p className='text-18 leading-30 font-400 text-textColor mt-[30px] text-center'>
            World Class care for everyone. Our health system offers unmtched,
            expert health care.
          </p>
      </div>
      <Testimonial/>
      </div>
    </section>

      </>
  )
}

export default Doctors