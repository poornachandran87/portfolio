import React from 'react';
import AboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="border-t border-white/10 bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-xl font-semibold tracking-tight text-white">
          About
        </h2>

        <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-start">
          <div className="w-44 shrink-0 md:w-52">
            <img
              src={AboutImg}
              alt="About Poornachandran"
              className="w-full rounded-lg border border-white/15 bg-white/5 p-2 object-contain"
            />
          </div>

          <div className="space-y-4 text-sm leading-7 text-indigo-100/90 sm:text-base">
            <p>
              I&apos;m Poornachandran, a Full Stack Developer grounded in{' '}
              <span className="font-medium text-white">Python</span> and{' '}
              <span className="font-medium text-white">JavaScript</span>. I build fast,
              responsive web applications with the MERN stack, turning product ideas into
              clean, maintainable code.
            </p>
            <p>
              With a <span className="font-medium text-white">B.Sc. in Physics</span> and
              Full Stack Product Engineering training from the School of Accelerated
              Learning (SOAL), I approach software with strong analytical problem-solving.
            </p>
            <p>
              I also manage end-to-end deployment and server hosting on{' '}
              <span className="font-medium text-white">
                AWS EC2, xCloud, Render, and Netlify
              </span>
              —owning the full lifecycle from development to live production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
