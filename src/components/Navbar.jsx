import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { label: '01. Home',     href: '#home'     },
  { label: '02. About',    href: '#about'    },
  { label: '03. Skills',   href: '#skills'   },
  { label: '04. Projects', href: '#projects' },
  { label: '05. Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['home','about','skills','projects','contact']
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActive(`#${current}`)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-darker/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

          <button onClick={() => scrollTo('#home')} className="font-mono font-bold text-lg group">
            <span className="text-primary">&lt;</span>
            <span className="text-white group-hover:text-primary transition-colors">Mudasir</span>
            <span className="text-primary"> /&gt;</span>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link ${active === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="hidden md:block btn-outline text-sm py-2 px-5"
            onClick={e => e.preventDefault()}
          >
            Resume
          </a>

          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden text-primary text-2xl z-50"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-darker/95 backdrop-blur-lg flex flex-col items-center justify-center
        transition-all duration-300 md:hidden
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 60}ms` }}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`font-mono text-2xl font-bold transition-colors
                  ${active === link.href ? 'text-primary' : 'text-muted hover:text-primary'}`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a href="#" className="btn-primary mt-4" onClick={e => e.preventDefault()}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
