const skills = {
  Languages: ["JavaScript", "Python", "C/C++"],
  Frontend: ["React", "Tailwind CSS", "Framer Motion"],
  Tools: ["Git/GitHub", "VS Code", "Figma"],
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-2xl bg-slate-800/60 border border-white/10">
              <h3 className="text-white font-semibold">{category}</h3>
              <ul className="mt-3 space-y-2">
                {items.map((s) => (
                  <li key={s} className="text-slate-300 text-sm">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
