function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* Content */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />

            <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Hai, Saya
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Reinol Bernauli{' '}
            <span className="text-blue-500">
              Simangunsong
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Saya membangun website modern, responsive, dan
            user-friendly menggunakan teknologi web modern.
            Saya senang mengubah ide menjadi digital experience
            yang menarik.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-blue-500/50 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social */}
          <div className="mt-8 flex items-center gap-5 text-slate-400">
            <a
              href="#"
              className="transition hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition hover:text-blue-400"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-blue-400"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto h-[450px] w-[350px]">

            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-[80px]" />

            {/* Placeholder */}
            <div className="relative flex h-full items-end justify-center overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-slate-900">
              <img
                src="/images/profile.jpg"
                alt="Foto profil"
                className="h-full w-full object-cover"
              />
            </div>



          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero