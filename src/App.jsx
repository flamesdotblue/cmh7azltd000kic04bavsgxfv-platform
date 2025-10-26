import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <section id="about" className="px-6 md:px-10 lg:px-16 py-24 bg-black/90 border-t border-white/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">We craft minimalist, high-impact digital experiences.</h2>
            </div>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Our approach blends strategy, design, and motion to build modern brands and products. We partner with ambitious teams to deliver websites that feel effortless and perform beautifully.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Brand Systems</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Interactive Web</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Motion & 3D</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Design Systems</span>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors">Start a project →</a>
            </div>
          </div>
        </section>
        <section id="services" className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-b from-black via-black to-zinc-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold mb-10">Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {title: 'Strategy', items: ['Positioning', 'Digital Roadmaps', 'UX Research']},
                {title: 'Design', items: ['Brand Identity', 'Web & Product', 'Design Systems']},
                {title: 'Build', items: ['Webflow / React', '3D & Motion', 'Performance']},
              ].map((col) => (
                <div key={col.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                  <h3 className="text-lg font-medium mb-4 text-white/90">{col.title}</h3>
                  <ul className="space-y-2 text-white/70">
                    {col.items.map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
