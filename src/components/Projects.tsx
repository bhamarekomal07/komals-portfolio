import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const projects = [
  {
    title: 'Space Exploration Landing Page',
    description:
      'Built a responsive landing page with interactive navigation and smooth animations to enhance user experience. Features parallax effects and modern UI design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/bhamarekomal07',
    live: '#',
    gradient: 'from-indigo-500 to-purple-600',
    emoji: '🚀',
  },
  {
    title: 'Smart Billing System for Shopkeeper',
    description:
      'Designed and implemented a MERN-based Smart Billing System featuring real-time transaction monitoring, automated billing, secure payment processing, and responsive UI.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/bhamarekomal07',
    live: '#',
    gradient: 'from-emerald-500 to-teal-600',
    emoji: '💳',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3 block">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="gradient-border glass-card overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
                {/* Project Banner */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  {/* Floating emoji */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="text-7xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      {project.emoji}
                    </span>
                  </motion.div>
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-primary-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <HiCode className="text-text-muted text-xl shrink-0 ml-2" />
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 rounded-full hover:bg-primary/20 transition-colors duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary bg-surface-lighter/50 rounded-lg hover:text-text-primary hover:bg-surface-lighter transition-all duration-200 hover:scale-105"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 hover:scale-105"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/bhamarekomal07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary/30 text-primary-light font-medium rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
