import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const HeaderSocial = () => {
  return (
    <motion.div variants={fadeIn('right',0.4)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className='header__social'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><FaGithub/></a>
        <a href="https://instagram.com" target='_blank'><FaInstagramSquare/></a>
    </motion.div>
  )
}

export default HeaderSocial