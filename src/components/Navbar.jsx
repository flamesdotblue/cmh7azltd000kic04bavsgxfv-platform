import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-4 mt-4 rounded-full border border-white/15 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-white">Lime Grid Studio</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="px-3 py-1.5 rounded-full bg-white text-black text-sm hover:bg-neutral-200 transition-colors">Let’s talk</a>
        </nav>
      </div>
    </header>
  );
}
