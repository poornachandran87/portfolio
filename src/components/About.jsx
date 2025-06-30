import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  const config  = {
    line1: "Hi, I’m Poornachandran, a passionate Full Stack Developer with a strong foundation in Python and JavaScript.",
  line2: "I specialize in building scalable, responsive web applications using the MERN stack.",
  line3: "I hold a B.Sc. in Physics and have completed a Full Stack Product Engineering course from SOAL.",
  line4: "My projects reflect real-world functionality—from real-time chat apps to predictive web applications—showcasing both frontend finesse and backend logic.",
  line5: "I enjoy learning new technologies, solving complex problems, and deploying applications that make an impact."

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
            <p className='pb-5'>{config.line4}</p>
            <p className='pb-5'>{config.line5}</p>
            </div>
        </div>
      
    </section>
  )
}

export default About
