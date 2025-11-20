const projects = [
  {
    title: "Interactive Portfolio",
    description: "A modern, animated portfolio with 3D elements and smooth transitions.",
    tech: ["React", "Tailwind", "Spline"],
    link: "#",
  },
  {
    title: "Study Planner",
    description: "A simple tool to organize study sessions and track progress.",
    tech: ["React", "LocalStorage"],
    link: "#",
  },
  {
    title: "Algorithm Visualizer",
    description: "Visual explanations of common algorithms to aid learning.",
    tech: ["JavaScript", "Canvas"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <a href="#contact" className="text-blue-300 hover:text-blue-200">Want to collaborate?</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-2xl bg-slate-800/60 border border-white/10 p-6 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start justify-between">
                <h3 className="text-white font-semibold group-hover:text-blue-200 transition-colors">{p.title}</h3>
                <div className="text-xs text-slate-400">{p.tech.join(" • ")}</div>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
