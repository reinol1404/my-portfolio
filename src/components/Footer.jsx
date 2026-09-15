function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © 2023 Reinol Simangunsong. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="#contact"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer