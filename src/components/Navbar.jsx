import {useState} from 'react'
import { icon} from '../assets'
import {navLinks} from '../constants' 
import './Styling/main.css'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={icon} alt="Medfolio" className='w=[124px] h-[60px]'/><figcaption class='icon'>Medfolio</figcaption>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>{navLinks.map((nav,index)=>(
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text=[16px] ${index===navLinks.length-1?'mr-0':'mr-10'} text-white `}>
          <a href={`/${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}</ul>
    </nav>
  )
}

export default Navbar