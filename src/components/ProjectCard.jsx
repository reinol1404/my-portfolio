function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-5">
        {project.demo ? (
            <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
            Live Demo →
            </a>
        ) : (
            <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
            Local Project
            </span>
        )}

        {project.github && (
            <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-400 transition hover:text-white"
            >
            GitHub →
            </a>
        )}
        </div>

      </div>
    </article>
  )
}

export default ProjectCard