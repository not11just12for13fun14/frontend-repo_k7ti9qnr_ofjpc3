export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300">
              I'm a Computer Science student passionate about front-end development, UI/UX, and building
              delightful digital products. I enjoy learning by doing and turning ideas into real, usable
              experiences on the web.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-white/10">
              <h3 className="text-white font-semibold">What I'm studying</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Data Structures, Algorithms, Databases, Operating Systems, and Web Development.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-white/10">
              <h3 className="text-white font-semibold">Interests</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Front-end frameworks, design systems, 3D on the web, and creative coding.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-white/10">
              <h3 className="text-white font-semibold">Goals</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Grow as a full‑stack developer, contribute to open source, and build useful tools for students.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-white/10">
              <h3 className="text-white font-semibold">Fun fact</h3>
              <p className="mt-2 text-slate-300 text-sm">
                I love exploring new tech and experimenting with interactive visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
