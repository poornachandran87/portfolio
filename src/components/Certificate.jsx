import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const certificates = [
  {
    title: 'Product Engineering – Full Stack Development',
    issuer: 'School of Accelerated Learning (SOAL)',
    summary:
      'End-to-end product engineering covering React, Node.js, Express, MongoDB, and deployment workflows.',
    link: 'https://drive.google.com/file/d/1nQ3JAaezYcs3O04mvIaBOieRC6CRzGx7/view?usp=sharing',
  },
  {
    title: 'Python Programming Course',
    issuer: 'Ameya Data Solution',
    summary:
      'Core Python syntax, data structures, functions, and problem-solving fundamentals.',
    link: 'https://drive.google.com/file/d/1dASVKGWnSu-PBBO1SutTF_1Lnz_Y0r77/view?usp=sharing',
  },
];

export default function Certificate() {
  return (
    <section
      id="certificate"
      className="border-t border-white/10 bg-primary px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-xl font-semibold tracking-tight text-white">
          Certificates
        </h2>

        <div className="mt-6 divide-y divide-white/15 border-y border-white/15">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between gap-3 py-5 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-sm font-medium text-white sm:text-base">
                  {cert.title}
                </h3>
                <p className="mt-0.5 text-xs font-mono text-indigo-200">{cert.issuer}</p>
                <p className="mt-1.5 text-sm text-indigo-100/85">{cert.summary}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-white transition-colors hover:text-indigo-200"
              >
                View Certificate
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
