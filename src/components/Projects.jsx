import React from 'react';
import websiteImg1 from '../assets/upwan.png';
import websiteImg2 from '../assets/chat-app.png';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Upwan',
    subtitle: 'E-Commerce Storefront',
    image: websiteImg1,
    description:
      'Full-stack e-commerce platform featuring product catalogs, cart management, and a responsive storefront built with the MERN stack and Tailwind CSS.',
    stack: 'MongoDB · Express · React · Node.js · Tailwind CSS',
    link: 'https://upwan.greennaturopathy.com/',
    code: 'https://github.com/poornachandran87/upwan.git',
  },
  {
    title: 'Chat App',
    subtitle: 'Real-Time Messaging',
    image: websiteImg2,
    description:
      'Real-time desktop chat application enabling instant bidirectional messaging and live room updates, built with MERN and Socket.io.',
    stack: 'React · Node.js · Express · MongoDB · Socket.io',
    link: 'https://chat-app-mern-1dhz.onrender.com/',
    code: 'https://github.com/poornachandran87/chat-app-mern',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-xl font-semibold tracking-tight text-white">
            Projects
          </h2>
          <a
            href="https://github.com/poornachandran87?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-indigo-200 transition-colors hover:text-white"
          >
            All repositories
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-white/15 bg-black/15 transition-colors hover:border-white/30"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="block aspect-video overflow-hidden border-b border-white/15 bg-black/20"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-indigo-200">
                    {project.subtitle}
                  </span>
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-indigo-100/90">
                  {project.description}
                </p>

                <p className="mt-4 font-mono text-xs text-indigo-200/80">
                  {project.stack}
                </p>

                <div className="mt-4 flex items-center gap-5 border-t border-white/15 pt-4 text-sm">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-white transition-colors hover:text-indigo-200"
                  >
                    Live Demo
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-200 transition-colors hover:text-white"
                  >
                    Source Code
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
