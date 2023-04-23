import React from 'react'
import styles from '../style'
import {icon} from '../assets'


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={icon}
          alt="medfolio"
          className='w-[266px] h-[72px] object-contain'
        />
        <p className={`${styles.paragraph} max-w-[400px]`}>
        An easy way to store your record.
        </p>
      </div>
    </div>
  </section>
)

export default Footer