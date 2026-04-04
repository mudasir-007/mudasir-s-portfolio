import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title:       'Car Damage Analyser',
    description:
      'Fork of AdityaDabgotra/Car_Damage_Analyser: turn short car-damage clips into structured, insurer-ready claims—computer vision maps body regions; an LLM suggests repair vs replace.',
    tags:        ['TypeScript', 'Computer Vision', 'LLM'],
    github:      'https://github.com/mudasir-007/Car_Damage_Analyser',
    live:        '#',
    featured:    true,
    gradient:    'from-emerald-500/10 to-cyan-500/10',
  },
  {
    title:       'DevCollab',
    description:
      'Full-stack developer collaboration: project spaces, Kanban-style tasks, team invites, and JWT-secured APIs—like lightweight Issues + boards for side projects.',
    tags:        ['JavaScript', 'Node.js', 'MongoDB', 'JWT'],
    github:      'https://github.com/mudasir-007/devcollab',
    live:        '#',
    featured:    true,
    gradient:    'from-green-500/10 to-teal-500/10',
  },
  {
    title:       'YouTube Backend',
    description:
      'Backend for a YouTube-style app: video metadata, channels, auth, and REST APIs built for scale and clarity.',
    tags:        ['JavaScript', 'Node.js', 'Express', 'REST'],
    github:      'https://github.com/mudasir-007/youtube_backend',
    live:        '#',
    featured:    true,
    gradient:    'from-red-500/10 to-orange-500/10',
  },
  {
    title:       'Uber',
    description:
      'Ride-hailing style stack: users and drivers, ride flow, location-aware logic, and JWT-secured endpoints.',
    tags:        ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    github:      'https://github.com/mudasir-007/uber',
    live:        '#',
    featured:    false,
    gradient:    'from-blue-500/10 to-purple-500/10',
  },
  {
    title:       'Movie Recommendation',
    description:
      'Recommendation pipeline for movies—ranking and suggestions driven by user preferences and metadata.',
    tags:        ['JavaScript', 'Node.js', 'Algorithms'],
    github:      'https://github.com/mudasir-007/movie-recommendation',
    live:        '#',
    featured:    false,
    gradient:    'from-violet-500/10 to-pink-500/10',
  },
  {
    title:       'Learning Platform',
    description:
      'Fork of akshayrivers/IWT-Assignment: a learning platform that builds custom study paths and graphs from prompts and memory—iterative, user-shaped content.',
    tags:        ['HTML', 'JavaScript', 'Learning UX'],
    github:      'https://github.com/mudasir-007/Learning-Platform',
    live:        '#',
    featured:    false,
    gradient:    'from-amber-500/10 to-rose-500/10',
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="section-padding bg-dark relative">
      <div className="orb w-72 h-72 bg-primary/5 top-20 right-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <div key={project.title} className="project-card"
              style={{ animationDelay: `${i * 100}ms`, background: `linear-gradient(135deg, #111111, #111111)` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 rounded-xl pointer-events-none`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-mono text-xs font-bold">{project.title.slice(0, 2).toUpperCase()}</span>
                    </div>
                    {project.featured && (
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">Featured</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                      <FiGithub size={17} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                      <FiExternalLink size={17} />
                    </a>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded bg-border/80 text-muted border border-transparent hover:border-primary/20 hover:text-primary/80 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setShowAll(v => !v)} className="btn-outline">
            {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
          </button>
        </div>
        <div className="mt-14 card glow-border text-center py-10">
          <p className="text-muted text-sm font-mono mb-2">Want to see more?</p>
          <h3 className="text-white text-xl font-bold mb-4">Browse all repositories</h3>
          <a href="https://github.com/mudasir-007?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
            <FiGithub size={18} /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
