import { useEffect } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import Cursor    from './components/Cursor'

export default function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
            entry.target.style.opacity = '1'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = '0'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-darker overflow-x-hidden">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
