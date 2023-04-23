import React from 'react'
import styles from '../style' 
import {discount,report} from '../assets'
import Getstarted from './GetStarted'
import Stats from './Stats'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm-px16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2 `}>
            <span className='text-white'>80% </span>
            Off for Government hospitals 
          </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[32px] text-[32px] text-white ss:leading-[50px]'>Take Control of Your Health <br className='sm:block hidden'/> {""} 
        with <span className='text-gradient '>Medfolio</span> {" "}
        Your <br/> </h1>
        <div className='ss:flex hidden md:mr-20 mr-10'>
          <Getstarted/>
        </div> 
      </div>
    <h1 className='font-poppins font-semibold ss:text-[32px] text-[32px] text-white ss:leading-[50px] w-full'>Comprehensive Health Record Platform.</h1>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={report} className='w-[650px] h-[550px] relative z-[5]'/>
      <div className='absolute z-[0] w-[100%] h-[70%] top-0 blue__gradient'/>
      <div className='absolute z-[1] w-[60%] h-[60%] bottom-20 rounded-full white__gradient'/>
      <div className='absolute z-[0] w-[0%] h-[60%] right -30 bottom-40 blue__gradient'/>
    </div>
  </section>
)

export default Hero