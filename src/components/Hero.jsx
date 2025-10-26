import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Overlays should not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-full flex items-center">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur text-xs text-white/80 mb-6">
            Interactive grid • Minimalist • Modern
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            Digital Studio crafting calm, high‑performing web experiences.
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
            We design and build elegant sites for brands at the edge of technology, culture, and design.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors">View work</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white/90 hover:bg-white/20 transition-colors">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
