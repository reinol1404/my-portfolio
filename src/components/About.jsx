import Section from './ui/Section'
import Button from './ui/Button'

function About() {
  const stats = [
    {
      value: '10+',
      label: 'Projects Completed',
    },
    {
      value: '5+',
      label: 'Years Learning',
    },
    {
      value: '5+',
      label: 'Technologies',
    },
    {
      value: '100%',
      label: 'Curiosity',
    },
  ]

  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">

        {/* About Content */}
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Turning ideas into{' '}
            <span className="text-blue-500">
              real products.
            </span>
          </h2>

          <p className="mt-6 leading-relaxed text-slate-400">
            Saya adalah seorang developer yang tertarik pada
            pengembangan website dan teknologi modern. Saya senang
            mempelajari teknologi baru dan mengubah ide menjadi
            aplikasi yang dapat digunakan.
          </p>

          <p className="mt-4 leading-relaxed text-slate-400">
            Saat ini saya fokus mengembangkan kemampuan di bidang
            frontend development menggunakan React dan teknologi
            web modern.
          </p>

          <div className="mt-8">
            <Button href="#contact">
              Hubungi Saya →
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.05]"
            >
              <p className="text-3xl font-bold text-blue-500">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default About