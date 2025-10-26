import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">Lime Grid Studio</div>
            <div className="text-white/60 text-sm">Designing calm, modern digital experiences.</div>
          </div>
          <div className="flex gap-6 text-white/70 text-sm">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Lime Grid Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}
