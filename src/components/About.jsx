import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  const config  = {
    line1: 'Hi, My name is Poornachandran. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS',
    line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.',
    line3: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose'
}
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-10'>
            <img src={AboutImg} alt='about'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>

            <h1 className=' text-4xl border-b-4 border-primary w-[170px] m-5 font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1} </p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
      
    </section>
  )
}

export default About
