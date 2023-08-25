import React from 'react'
import Resume from '../../assets/resume.pdf'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const CTA = () => {
  return (
    <motion.div variants={fadeIn('up',0.4)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className='cta'>
        <a href={Resume} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </motion.div>
  )
}

export default CTA