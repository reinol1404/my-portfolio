import { useEffect, useRef } from 'react'
import Section from './ui/Section'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects() {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current

    if (!slider) return

    const interval = setInterval(() => {
      slider.scrollBy({
        left: 360,
        behavior: 'smooth',
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section id="projects">

      {/* Heading */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Selected <span className="text-blue-500">Works</span>
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
          Beberapa project yang saya kerjakan untuk menerapkan
          kemampuan dan teknologi yang saya pelajari.
        </p>
      </div>

      {/* Slider */}
      <div
  ref={sliderRef}
  className="flex items-stretch gap-6 overflow-x-auto pb-6"
  style={{
    scrollbarWidth: 'none',
  }}
>
  {projects.map((project) => (
    <div
      key={project.id}
      className="flex w-[320px] shrink-0"
    >
      <ProjectCard project={project} />
    </div>
  ))}
</div>

      {/* Indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {projects.map((project) => (
          <span
            key={project.id}
            className="h-2 w-2 rounded-full bg-blue-500/40"
          />
        ))}
      </div>

    </Section>
  )
}

export default Projects