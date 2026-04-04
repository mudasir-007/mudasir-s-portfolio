import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

const ROLES = [
  'MERN Stack Developer',
  'Distributed Systems Enthusiast',
  'Open Source Contributor',
  '',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed,  setDisplayed] = useState('')
  const [deleting,   setDeleting]  = useState(false)
  const [charIndex,  setCharIndex] = useState(0)
  const canvasRef = useRef(null)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let timeout
    if (!deleting && charIndex < role.length) {
      timeout = setTimeout(() => { setDisplayed(role.slice(0, charIndex + 1)); setCharIndex(c => c + 1) }, 80)
    } else if (!deleting && charIndex === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => { setDisplayed(role.slice(0, charIndex - 1)); setCharIndex(c => c - 1) }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    let animId
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.5 + 0.1,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,136,${p.o})`; ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,255,136,${0.05 * (1 - dist/120)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="orb w-96 h-96 bg-primary/10 top-20 -left-20" />
      <div className="orb w-80 h-80 bg-primary/5 bottom-20 right-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl">
          <p className="font-mono text-primary text-sm tracking-widest mb-4 animate-fade-up">&gt; Hello, World! I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none animate-fade-up" style={{ animationDelay: '100ms' }}>
            Mudasir
            <span className="block text-primary animate-glow">Mushtaq</span>
          </h1>
          <div className="flex items-center gap-2 mb-6 min-h-10 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <span className="text-xl md:text-2xl font-semibold text-white font-mono">
              {displayed}<span className="blink text-primary">|</span>
            </span>
          </div>
          <p className="text-light/70 text-lg leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ animationDelay: '300ms' }}>
            A passionate full-stack developer and CS undergrad at NIT Srinagar,
            building scalable web applications and backend systems with clean, efficient code.
          </p>
          <div className="flex flex-wrap gap-4 mb-14 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <button onClick={scrollToAbout} className="btn-primary flex items-center gap-2">
              Explore My Work <HiArrowDown className="animate-bounce" />
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
              Get In Touch
            </button>
          </div>
          <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: '500ms' }}>
            {[
              { icon: FiGithub,   href: 'https://github.com/mudasir-007',                      label: 'GitHub'   },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mudasir-wani-087b50292/', label: 'LinkedIn' },
              { icon: FiTwitter,  href: '#',                                                    label: 'Twitter'  },
              { icon: FiMail,     href: 'mailto:mudasirwani4567@gmail.com',                     label: 'Email'    },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                 className="text-muted hover:text-primary transition-all duration-200 hover:-translate-y-1 text-xl">
                <Icon />
              </a>
            ))}
            <div className="h-px w-24 bg-border ml-2" />
            <span className="font-mono text-xs text-muted">mudasir.dev</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '800ms' }}>
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-5 h-8 border border-muted/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-primary rounded-full scroll-dot" />
        </div>
      </div>
    </section>
  )
}
