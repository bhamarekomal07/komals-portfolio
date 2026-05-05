import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'bhamarekomal07@gmail.com',
    href: 'mailto:bhamarekomal07@gmail.com',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+91 8668530144',
    href: 'tel:+918668530144',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Shirpur, Dist Dhule – 425427',
    href: '#',
  },
]

const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/bhamarekomal07',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/komal-bhamare-2458a1334',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3 block">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="max-w-lg mx-auto text-text-muted">
            I'm always open to discussing new projects, internship opportunities,
            or just a friendly hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass-card p-5 flex items-center gap-4 group glow-hover transition-all duration-300 block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                  <info.icon className="text-primary-light text-xl" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-text-primary group-hover:text-primary-light transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-sm text-text-muted mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3.5 glass-card hover:border-primary/30 transition-all duration-300 group"
                  >
                    <social.icon className="text-text-secondary group-hover:text-primary-light transition-colors duration-200" size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-surface-lighter/50 border border-primary/10 rounded-xl text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-surface-lighter/50 border border-primary/10 rounded-xl text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-surface-lighter/50 border border-primary/10 rounded-xl text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 shadow-lg shadow-green-500/25'
                    : 'bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl hover:shadow-primary/25'
                }`}
                disabled={submitted}
              >
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <HiPaperAirplane className="rotate-90" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
