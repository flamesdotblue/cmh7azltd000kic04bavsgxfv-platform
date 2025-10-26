import React from 'react';

const projects = [
  {
    title: 'Aether OS',
    tag: 'Product Website',
    img: 'https://images.unsplash.com/photo-1527443224154-c4f2a9b1dc00?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nova Finance',
    tag: 'Brand + Web',
    img: 'https://images.unsplash.com/photo-1542228262-3d663b306a56?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Signal Labs',
    tag: 'Interactive',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse Health',
    tag: 'Product Design',
    img: 'https://images.unsplash.com/photo-1552508744-1696d4464960?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Orbit Cloud',
    tag: '3D + Motion',
    img: 'https://images.unsplash.com/photo-1551281044-8d8fad9f9d2b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Helix Robotics',
    tag: 'Web Experience',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 lg:px-16 py-24 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold">Selected Work</h2>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 hover:bg-white/10 transition-colors">Work with us</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a key={p.title} href="#contact" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="text-white/60 text-sm">{p.tag}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-black">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div id="contact" className="mt-16 p-6 md:p-10 rounded-2xl border border-white/10 bg-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">Have a project in mind?</h3>
              <p className="text-white/70 mt-2">Tell us about your goals and timelines. We’ll get back to you within 1–2 business days.</p>
            </div>
            <div className="md:text-right">
              <a href="mailto:hello@limegrid.studio" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors">hello@limegrid.studio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
