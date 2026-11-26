import React from 'react';
import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { ArrowUpRightIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const resumeDownloadUrl =
    'https://drive.google.com/uc?export=download&id=1vBJAd5XRIK2T0D36ggJxAatA2DnXigtK';

  return (
    <section id="home" className="bg-primary px-6 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto flex max-w-4xl flex-col-reverse items-start justify-between gap-12 md:flex-row md:items-center">
        <div className="md:w-3/5">
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Poornachandran S
          </h1>
          <p className="mt-2 font-mono text-sm text-indigo-100">
            Full Stack Developer · MERN, Python &amp; Cloud Hosting
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-indigo-50/90">
            I design, build, and deploy full-stack web applications—from e-commerce
            storefronts to real-time chat platforms—focused on clean UI, dependable APIs,
            and smooth production hosting.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-indigo-50"
            >
              View Projects
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/30 bg-secondary/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-secondary/70"
            >
              <DocumentArrowDownIcon className="h-4 w-4 text-indigo-100" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-indigo-100">
            <a
              href="https://github.com/poornachandran87?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <AiOutlineGithub size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/poornachandran-s-685280226"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <AiOutlineLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href="mailto:chandru08july2000@gmail.com"
              className="transition-colors hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        <div className="w-48 shrink-0 sm:w-56 md:w-64">
          <img
            src={HeroImg}
            alt="Poornachandran S"
            className="w-full rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
