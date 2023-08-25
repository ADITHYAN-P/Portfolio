import React from 'react'
import './Experience.css' 
import CountUp from 'react-countup'
import { inView, motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Carousel from 'react-multi-carousel'
//import  Carousel from "react-multi-carousel/lib/styles.css"

function Experience() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id="experience">
      <motion.h5 variants={fadeIn('up',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}}>Skills I have</motion.h5>
      <motion.h2 variants={fadeIn('up',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}}>My Experience</motion.h2>

      <div className='container experience__container'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eos, maiores soluta laboriosam sequi dolorem exercitationem voluptas delectus ad tempora commodi atque vel expedita animi veritatis debitis. Nulla, ullam incidunt?</p>
        <Carousel responsive= {responsive} infinie ={true} className='skill-slider ' >
          <div className='skill_item'>
            <div className="skill_count">
              <CountUp start={0} end={13} duration={4} />
            </div>
            <div className='skill_content'>
              Python
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Experience