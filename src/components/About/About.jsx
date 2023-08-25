import React from 'react'
import './About.css'
import Me from '../../assets/about-bg_blue-croped.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function About() {
  return (
    <section id="about">
      <motion.h5 variants={fadeIn('up',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}}>Get to know</motion.h5>
      <motion.h2 variants={fadeIn('up',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}}>About Me</motion.h2>
      <div className="container about__container">
        <div className="about__me">
          <motion.div variants={fadeIn('right',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className="about__me-image">
            <img src={Me} alt='About Image' />
          </motion.div>
        </div>
        <motion.div variants={fadeIn('left',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className="about__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas beatae veniam sapiente officiis numquam eum necessitatibus iure, harum repellendus error provident similique dolorum maxime repellat dolorem dicta tempora obcaecati.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </motion.div>
      </div>
    </section>
  )
}

export default About