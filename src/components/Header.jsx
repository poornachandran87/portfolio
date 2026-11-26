import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificate' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-secondary/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-base font-semibold tracking-tight text-white hover:text-indigo-100"
        >
          Poornachandran S
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-indigo-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-150 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={toggleMenu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={toggleMenu}
          onClick={() => setToggleMenu((prev) => !prev)}
          className="rounded-md p-1.5 text-indigo-100 transition-colors hover:text-white md:hidden"
        >
          {toggleMenu ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="border-t border-white/15 bg-secondary px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm text-indigo-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setToggleMenu(false)}
                  className="block py-1 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
