import React, { useState } from 'react';
import { CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const email = 'chandru08july2000@gmail.com';
  const phone = '+91 82201 38801';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="border-t border-white/10 bg-primary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-xl font-semibold tracking-tight text-white">
          Contact
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-indigo-100/90 sm:text-base">
          Available for full-stack developer roles, freelance builds, and deployment
          consulting. Reach out anytime by email or phone.
        </p>

        <div className="mt-6 space-y-3 text-sm sm:text-base">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-16 font-mono text-xs uppercase tracking-wider text-indigo-200">
              Email
            </span>
            <a
              href={`mailto:${email}`}
              className="text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              {email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy email address"
              className="inline-flex items-center gap-1 rounded border border-white/30 bg-secondary/40 px-2 py-0.5 font-mono text-xs text-white transition-colors hover:border-white/60"
            >
              {copied ? (
                <>
                  <CheckIcon className="h-3 w-3 text-emerald-300" />
                  copied
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="h-3 w-3" />
                  copy
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="w-16 font-mono text-xs uppercase tracking-wider text-indigo-200">
              Phone
            </span>
            <a
              href="tel:+918220138801"
              className="text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
