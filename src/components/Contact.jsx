import { useState } from 'react'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [errors,  setErrors]  = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = e => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(p => ({ ...p, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const contacts = [
    { icon: FiMail,    label: 'Email',    value: 'mudasirwani4567@gmail.com',                     href: 'mailto:mudasirwani4567@gmail.com' },
    { icon: FiMapPin,  label: 'Location', value: 'Srinagar, India 🇮🇳',                            href: '#' },
    { icon: FiGithub,  label: 'GitHub',   value: 'github.com/mudasir-007',                        href: 'https://github.com/mudasir-007' },
    { icon: FiLinkedin,label: 'LinkedIn', value: 'linkedin.com/in/mudasir-wani-087b50292',        href: 'https://www.linkedin.com/in/mudasir-wani-087b50292/' },
  ]

  return (
    <section id="contact" className="section-padding bg-darker relative">
      <div className="orb w-80 h-80 bg-primary/5 bottom-0 right-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <p className="section-subtitle">Let's talk</p>
          <h2 className="section-title">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
          <p className="text-muted mt-4 max-w-lg leading-relaxed">
            I'm currently looking for internship opportunities. Whether you have a question, a project idea,
            or just want to say hi — my inbox is always open!
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {contacts.map(item => (
              <a key={item.label} href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                className="flex items-center gap-4 card group hover:border-primary/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-muted text-xs font-mono">{item.label}</p>
                  <p className="text-light text-sm font-medium group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
            <div className="card border-primary/20 bg-primary/5 flex items-center gap-3 mt-6">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <p className="text-sm text-light/80">
                Open to <span className="text-primary font-semibold">internship</span> opportunities
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted mb-1.5">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
                    className={`w-full bg-darker border rounded-lg px-4 py-3 text-light text-sm outline-none transition-all duration-200 placeholder-muted/50 focus:border-primary/50 focus:shadow-sm focus:shadow-primary/10 ${errors.name ? 'border-red-500/50' : 'border-border'}`} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted mb-1.5">Email *</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="john@example.com"
                    className={`w-full bg-darker border rounded-lg px-4 py-3 text-light text-sm outline-none transition-all duration-200 placeholder-muted/50 focus:border-primary/50 focus:shadow-sm focus:shadow-primary/10 ${errors.email ? 'border-red-500/50' : 'border-border'}`} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-muted mb-1.5">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Internship opportunity / Project inquiry / Just saying hi"
                  className="w-full bg-darker border border-border rounded-lg px-4 py-3 text-light text-sm outline-none transition-all duration-200 placeholder-muted/50 focus:border-primary/50 focus:shadow-sm focus:shadow-primary/10" />
              </div>
              <div>
                <label className="block text-xs font-mono text-muted mb-1.5">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project or opportunity..."
                  className={`w-full bg-darker border rounded-lg px-4 py-3 text-light text-sm outline-none transition-all duration-200 placeholder-muted/50 focus:border-primary/50 focus:shadow-sm focus:shadow-primary/10 resize-none ${errors.message ? 'border-red-500/50' : 'border-border'}`} />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={sending || sent}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95
                  ${sent ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed' : 'btn-primary'}`}>
                {sending ? (
                  <><span className="w-4 h-4 border-2 border-darker/30 border-t-darker rounded-full animate-spin" />Sending...</>
                ) : sent ? (
                  <><FiCheck size={18} />Message Sent!</>
                ) : (
                  <><FiSend size={16} />Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
