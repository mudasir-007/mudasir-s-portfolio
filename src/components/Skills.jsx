import { useEffect, useRef, useState } from 'react'
import {
  SiReact, SiNodedotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiGit,
  SiGraphql, SiPython, SiExpress, SiRedis,
  SiJavascript, SiHtml5,
} from 'react-icons/si'

const skills = [
  { name: 'React.js',       level: 65, icon: SiReact,       color: '#61DAFB' },
  { name: 'JavaScript',     level: 70, icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Node.js',        level: 75, icon: SiNodedotjs,   color: '#68A063' },
  { name: 'Express.js',     level: 80, icon: SiExpress,     color: '#FFFFFF' },
  { name: 'Tailwind CSS',   level: 70, icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'MongoDB',        level: 75, icon: SiMongodb,     color: '#47A248' },
  { name: 'PostgreSQL',     level: 20, icon: SiPostgresql,  color: '#336791' },
  { name: 'GraphQL',        level: 50, icon: SiGraphql,     color: '#E10098' },
  { name: 'Redis',          level: 38, icon: SiRedis,       color: '#DC382D' },
  { name: 'Python',         level: 75, icon: SiPython,      color: '#3776AB' },
  { name: 'Git / GitHub',   level: 70, icon: SiGit,         color: '#F05032' },
  { name: 'HTML5 / CSS3',   level: 95, icon: SiHtml5,       color: '#E34F26' },
]

const categories = [
  { label: 'All',      filter: null },
  { label: 'Frontend', filter: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3'] },
  { label: 'Backend',  filter: ['Node.js', 'Express.js', 'GraphQL', 'Redis', 'Python'] },
  { label: 'Database', filter: ['MongoDB', 'PostgreSQL'] },
  { label: 'Tools',    filter: ['Git / GitHub'] },
]

function SkillBar({ skill, animate }) {
  return (
    <div className="card group hover:border-primary/30">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <skill.icon size={18} style={{ color: skill.color }} />
          <span className="text-sm font-medium text-light">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: animate ? `${skill.level}%` : '0%' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef  = useRef(null)
  const [animate,   setAnimate]   = useState(false)
  const [category,  setCategory]  = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = category ? skills.filter(s => category.includes(s.name)) : skills

  return (
    <section id="skills" className="section-padding bg-darker relative" ref={sectionRef}>
      <div className="orb w-72 h-72 bg-primary/5 bottom-0 left-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Skills & <span className="text-primary">Technologies</span></h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button key={cat.label} onClick={() => setCategory(cat.filter)}
              className={`font-mono text-sm px-5 py-2 rounded-full border transition-all duration-200
                ${(category === cat.filter)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted hover:border-primary/40 hover:text-light'}`}>
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <div key={skill.name} style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`
            }}>
              <SkillBar skill={skill} animate={animate} />
            </div>
          ))}
        </div>
        <div className="mt-14">
          <p className="text-muted font-mono text-xs tracking-widest uppercase mb-6">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {['C', 'C++', 'Java', 'REST APIs', 'Prisma', 'Vercel', 'Linux', 'VS Code', 'Postman', 'JWT', 'OOP', 'DBMS'].map(tech => (
              <span key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-md bg-card border border-border text-muted hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
