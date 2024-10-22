import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
const Hero = () => {
    const config  = {
        subtitle: 'Im a Full-stack developer',
        social: {
            
            github: 'https://github.com/poornachandran87?tab=repositories',
            linkedin: 'www.linkedin.com/in/poornachandran-s-685280226'
        }
    }
  return (
      <section id='/' className='flex flex-col md:flex-row justify-center  px-5 py-32 bg-primary' >
          <div className='w-1/2 flex flex-col'>

              <h1 className=' text-white text-3xl font-hero-font  '>Hi, <br /> I am Poornachandran S
                  <p className='text-2xl'>
                      {config.subtitle}
                  </p>
              </h1>
              <div className='flex py-10'>
                
                <a href={config.social.github}  target='blank' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} target='blank' className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
          </div> 
         

          <img className=' md:w-1/3' src={HeroImg} alt='hero' />
      </section>
  )
}

export default Hero
