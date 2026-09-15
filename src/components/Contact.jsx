import {
  FiMail,
  FiArrowUpRight,
  FiBriefcase,
  FiUsers,
  FiMessageCircle,
  FiCoffee,
} from 'react-icons/fi'

import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa'

import Section from './ui/Section'

function Contact() {
  const contacts = [
    {
      name: 'Email',
      value: 'reinol1404@gmail.com',
      description: 'Saya biasanya membalas dalam 1×24 jam.',
      href: 'mailto:reinol1404@gmail.com',
      icon: FiMail,
      style: 'bg-blue-500/10 text-blue-400',
    },
    {
      name: 'WhatsApp',
      value: '+62 812 6240 2991',
      description: 'Respon lebih cepat melalui WhatsApp.',
      href: 'https://wa.me/6281262402991',
      icon: FaWhatsapp,
      style: 'bg-green-500/10 text-green-400',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/reinol-simangunsong',
      description: 'Mari terhubung secara profesional.',
      href: 'https://www.linkedin.com/in/reinol-simangunsong-62b9413a2/',
      icon: FaLinkedinIn,
      style: 'bg-blue-500/10 text-blue-400',
    },
    {
      name: 'GitHub',
      value: 'github.com/reinol1404',
      description: 'Lihat project dan kontribusi saya.',
      href: 'https://github.com/reinol1404',
      icon: FaGithub,
      style: 'bg-slate-500/10 text-slate-300',
    },
    {
      name: 'Instagram',
      value: '@reinolbs',
      description: 'Untuk update keseharian saya.',
      href: 'https://instagram.com/reinolbs',
      icon: FaInstagram,
      style: 'bg-pink-500/10 text-pink-400',
    },
  ]

  const opportunities = [
    {
      title: 'Peluang Kerja',
      description: 'Full-time, part-time, atau freelance.',
      icon: FiBriefcase,
      style: 'bg-blue-500/10 text-blue-400',
    },
    {
      title: 'Kolaborasi Proyek',
      description: 'Project bersama dan pengembangan ide.',
      icon: FiUsers,
      style: 'bg-purple-500/10 text-purple-400',
    },
    {
      title: 'Diskusi Teknologi',
      description: 'Berbagi ilmu dan pengalaman.',
      icon: FiMessageCircle,
      style: 'bg-yellow-500/10 text-yellow-400',
    },
    {
      title: 'Ngobrol Santai',
      description: 'Kopi virtual selalu menyenangkan!',
      icon: FiCoffee,
      style: 'bg-pink-500/10 text-pink-400',
    },
  ]

  return (
    <Section id="contact">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-blue-400">
          Contact
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Let's <span className="text-blue-500">Connect</span>
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          Tertarik untuk berkolaborasi, punya pertanyaan, atau sekadar ingin
          ngobrol tentang teknologi? Jangan ragu untuk menghubungi saya melalui
          platform di bawah ini.
        </p>
      </div>

      {/* Main Contact */}
      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />

            <span className="text-sm text-blue-300">
              Always open to new opportunities
            </span>
          </div>

          <h3 className="mt-8 max-w-lg text-4xl font-bold leading-tight sm:text-5xl">
            Mari Wujudkan
            <br />
            Ide Menjadi{' '}
            <span className="text-blue-500">
              Kenyataan
            </span>
          </h3>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
            Saya selalu antusias untuk berdiskusi tentang project baru,
            kesempatan kerja, atau sekadar bertukar cerita seputar dunia
            teknologi dan pengembangan web.
          </p>

          <p className="mt-8 text-xl italic text-slate-300">
            Let's build something great!
          </p>

          <div className="mt-2 h-px w-48 bg-gradient-to-r from-blue-500 to-transparent" />
        </div>

        {/* Right - Contact Links */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-blue-950/20 sm:p-8">
          <div className="space-y-2">
            {contacts.map((contact) => {
              const Icon = contact.icon

              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl p-4 transition duration-300 hover:bg-white/[0.05]"
                >
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${contact.style}`}
                  >
                    <Icon />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-white">
                      {contact.name}
                    </h4>

                    <p className="mt-1 truncate text-sm font-medium text-blue-400">
                      {contact.value}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {contact.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <FiArrowUpRight className="text-xl text-slate-600 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Opportunities */}
      <div className="mt-20">
        <div className="mb-10 flex items-center justify-center gap-6">
          <div className="hidden h-px w-24 bg-white/10 sm:block" />

          <p className="text-sm font-medium uppercase tracking-[0.35em] text-blue-400">
            Terbuka Untuk
          </p>

          <div className="hidden h-px w-24 bg-white/10 sm:block" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {opportunities.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04]"
              >
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl ${item.style}`}
                >
                  <Icon />
                </div>

                <h4 className="mt-5 font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quote */}
      <div className="mt-16 text-center">
        <p className="text-sm italic text-slate-500">
          "Ide besar dimulai dari percakapan sederhana."
        </p>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
      </div>
    </Section>
  )
}

export default Contact