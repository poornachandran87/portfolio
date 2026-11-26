import React from 'react';
import ResumeImg from '../assets/resume.jpg';
import {
  ArrowUpRightIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';

export default function Resume() {
  const driveLink =
    'https://drive.google.com/file/d/1vBJAd5XRIK2T0D36ggJxAatA2DnXigtK/view?usp=drivesdk';
  const downloadLink =
    'https://drive.google.com/uc?export=download&id=1vBJAd5XRIK2T0D36ggJxAatA2DnXigtK';

  return (
    <section id="resume" className="border-t border-white/10 bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-xl font-semibold tracking-tight text-white">
          Resume
        </h2>

        <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <img
            className="w-40 rounded-md border border-white/20 object-cover"
            src={ResumeImg}
            alt="Poornachandran S Resume"
          />

          <div>
            <p className="max-w-md text-sm leading-relaxed text-indigo-100/90 sm:text-base">
              Download my latest resume or open it in Google Drive for a complete
              summary of my projects, engineering skills, and cloud hosting experience.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-indigo-50"
              >
                <DocumentArrowDownIcon className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/30 bg-primary/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-primary/70"
              >
                Open in Drive
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
