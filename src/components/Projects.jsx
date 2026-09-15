import Section from './ui/Section'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <Section id="projects">

      {/* Heading */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Beberapa project yang saya buat untuk menerapkan
          teknologi dan mengembangkan kemampuan saya.
        </p>
      </div>

      {/* Projects */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </Section>
  )
}

export default Projects