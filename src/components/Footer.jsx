import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-2 text-xs text-indigo-200 sm:flex-row sm:items-center">
        <p>&copy; {new Date().getFullYear()} Poornachandran S</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/poornachandran87?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/poornachandran-s-685280226"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a href="#home" className="transition-colors hover:text-white">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
