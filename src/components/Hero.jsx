import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white ring-1 ring-white/20 backdrop-blur">
            Computer Science Student
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Hi, I'm Subhi Khawatmi
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-xl">
            I love building interactive, modern web experiences and learning new technologies.
            Explore my projects, skills, and get in touch!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:bg-blue-400 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white font-medium ring-1 ring-white/20 hover:bg-white/20 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden lg:block" aria-hidden="true">
          {/* Empty column to let 3D scene breathe */}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/10 to-slate-900"></div>
    </section>
  );
}
