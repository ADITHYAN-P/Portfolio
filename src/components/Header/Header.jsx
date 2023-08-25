import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/cv_profile-removebg.png'
import HeaderSocial from './HeaderSocial'
import {TypeAnimation} from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <motion.h1 variants={fadeIn('up',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}}>Adithyan</motion.h1>
        <motion.h3 variants={fadeIn('up',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className="text-light">
          <span>I am </span>
          <TypeAnimation sequence ={[
            'a Student',
            2000,
            'a ML Enthusiast',
            2000,
            'a Developer',
            2000,
            'an IEEE Volunteer',
            2000,
            'a Tech Enthusiast',
            2000
          ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.h3>
        <CTA/>
        <HeaderSocial/>

        <motion.div variants={fadeIn('left',0.4)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className="me">
            <img src={Me} alt="me" />
        </motion.div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header