import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const links = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

const socials = [
  { icon: FiGithub,   href: 'https://github.com/mudasir-007',                      label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mudasir-wani-087b50292/', label: 'LinkedIn' },
  { icon: FiTwitter,  href: '#',                                                    label: 'Twitter'  },
  { icon: FiMail,     href: 'mailto:mudasirwani4567@gmail.com',                     label: 'Email'    },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <button onClick={() => scrollTo('#home')} className="font-mono font-bold text-xl mb-3 block group">
              <span className="text-primary">&lt;</span>
              <span className="text-white group-hover:text-primary transition-colors">Mudasir</span>
              <span className="text-primary"> /&gt;</span>
            </button>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Full Stack Developer and NIT Srinagar CS undergrad, building scalable web applications with clean code.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary">Open to internships</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase font-mono">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)}
                    className="text-muted hover:text-primary text-sm transition-colors font-mono flex items-center gap-2 group">
                    <span className="text-primary/40 group-hover:text-primary transition-colors">&gt;</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase font-mono">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:mudasirwani4567@gmail.com"
                className="flex items-center gap-2 text-muted hover:text-primary text-sm transition-colors group">
                <FiMail size={14} className="text-primary/60 group-hover:text-primary" />
                mudasirwani4567@gmail.com
              </a>
              <p className="flex items-center gap-2 text-muted text-sm">
                <span className="text-primary/60 text-xs">📍</span>
                Srinagar, India
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="h-px bg-border mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs font-mono">© {new Date().getFullYear()} Mudasir Mushtaq. All rights reserved.</p>
          <p className="text-muted text-xs flex items-center gap-1.5 font-mono">
            Built with <FiHeart size={12} className="text-primary animate-pulse" /> using React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
