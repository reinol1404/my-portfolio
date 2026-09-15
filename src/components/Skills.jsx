import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'

import { SiTailwindcss } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

import Section from './ui/Section'
import skills from '../data/skills'

const skillIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  'Tailwind CSS': SiTailwindcss,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'VS Code': VscVscode,
}

function Skills() {
  return (
    <Section id="skills">

      {/* Heading */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Technologies I Use
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Teknologi dan tools yang saya gunakan untuk
          membangun project.
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skillIcons[skill.name]

          return (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/[0.05]"
            >
              <div className="flex items-center gap-4">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Icon />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-200">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {skill.category}
                  </p>
                </div>

              </div>
            </div>
          )
        })}
      </div>

    </Section>
  )
}

export default Skills