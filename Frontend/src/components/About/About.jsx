import React from 'react'
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
  <section>
    <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/* ======about imag====== */}

            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt="" />
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
                lg:right-[22%]'>
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>
            {/* ============about content======== */}
            <div className='w-full lg:w-1/2 xl:w-[570px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nation best</h2>
                <p className='text-18 leading-30 font-400 text-textColor mt-[18]'>For 30 years in a row, Pakistan news and world report has
                recognied us as one of the best public hospitals in the nation and #1 in Islamabad</p>

                <p className='text-18 leading-30 font-400 text-textColor mt-18 mt-[30px]'>We believe in a holistic and patient-centered approach to healthcare.
                 From the moment you walk through our doors, you are not just a patient; you are a valued individual deserving of personalized attention and compassionate care.
                  Our experienced team of healthcare professionals is dedicated to providing comprehensive medical services while considering your specific needs, concerns, and preferences.</p>
             <Link to='/'><button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Learn More
             </button></Link>
            </div>

        </div>
    </div>

  </section>
  )
}

export default About