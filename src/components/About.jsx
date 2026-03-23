import { useEffect, useRef } from 'react'
import { FiCode, FiServer, FiLayout, FiZap } from 'react-icons/fi'

const stats = [
  { label: 'Years Coding', value: '3+' },
  { label: 'Projects Built', value: '4+' },
  { label: 'Technologies', value: '15+' },
  { label: 'CGPA', value: '7.3' },
]

const services = [
  { icon: FiLayout,  title: 'Frontend Dev',  desc: 'Building responsive UIs with React.js, Tailwind CSS, and modern JavaScript.' },
  { icon: FiServer,  title: 'Backend Dev',   desc: 'REST APIs, Node.js, Express, MongoDB, PostgreSQL and database design.' },
  { icon: FiCode,    title: 'Full Stack',    desc: 'End-to-end development from database schema to pixel-perfect UI.' },
  { icon: FiZap,     title: 'Performance',  desc: 'Optimizing web apps for speed, scalability, and best UX practices.' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-padding bg-dark relative" ref={sectionRef}>
      <div className="orb w-64 h-64 bg-primary/5 top-0 right-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal-item mb-16" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About <span className="text-primary">Me</span></h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="reveal-item" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
              <p className="text-light/80 text-lg leading-relaxed">
                Hey there! I'm <span className="text-primary font-semibold">Mudasir Mushtaq</span>, a full-stack
                developer and 3rd-year B.Tech Computer Science student at NIT Srinagar. I love building
                things that live on the internet — from sleek user interfaces to robust backend systems.
              </p>
            </div>
            <div className="reveal-item" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}>
              <p className="text-light/60 leading-relaxed">
                I specialize in React, Node.js, and have hands-on experience building real-world full-stack
                applications. I enjoy solving complex problems and turning ideas into clean, scalable software.
              </p>
            </div>
            <div className="reveal-item" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}>
              <p className="text-light/60 leading-relaxed">
                Currently looking for internship opportunities where I can contribute, learn, and grow as a developer.
                Based in Srinagar, India 🇮🇳
              </p>
            </div>
            <div className="reveal-item card font-mono text-sm mt-6"
                 style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.4s' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-muted text-xs ml-2">about.js</span>
              </div>
              <div className="space-y-1 text-xs">
                <p><span className="text-primary/80">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> {'{'}</p>
                <p className="pl-4"><span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-yellow-400">"Mudasir Mushtaq"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">college</span><span className="text-white">:</span> <span className="text-yellow-400">"NIT Srinagar"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">role</span><span className="text-white">:</span> <span className="text-yellow-400">"Full Stack Developer"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">location</span><span className="text-white">:</span> <span className="text-yellow-400">"Srinagar, India 🇮🇳"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">available</span><span className="text-white">:</span> <span className="text-yellow-400">"internships"</span><span className="text-white">,</span></p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4 reveal-item"
                 style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}>
              {stats.map(stat => (
                <div key={stat.label} className="card text-center glow-border group">
                  <p className="text-3xl font-bold text-primary group-hover:animate-glow mb-1">{stat.value}</p>
                  <p className="text-muted text-xs font-mono">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3">
              {services.map((svc, i) => (
                <div key={svc.title}
                  className="reveal-item flex items-start gap-4 card hover:border-primary/30 group"
                  style={{ opacity: 0, transform: 'translateY(20px)', transition: `all 0.6s ease ${0.3 + i * 0.1}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svc.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-0.5">{svc.title}</h4>
                    <p className="text-muted text-sm">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
