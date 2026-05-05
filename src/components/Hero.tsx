import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown, HiMail } from 'react-icons/hi'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-light/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-surface-light/60 backdrop-blur-sm border border-primary/20 text-sm text-text-secondary"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
          Open to Work &amp; Internships
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg sm:text-xl text-text-secondary mb-4 font-medium"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Komal</span>{' '}
          <span className="text-text-primary">Bhamare</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl text-text-secondary mb-4 font-light"
        >
          <span className="text-primary-light font-medium">CSE Student</span> · Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-text-muted text-base sm:text-lg mb-10 leading-relaxed"
        >
          Passionate about building modern web applications with clean code
          and beautiful user experiences. Currently pursuing B.Tech in Computer Science
          at R C Patel Institute of Technology, Shirpur.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View Projects
            <HiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-primary/30 text-primary-light font-semibold rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <HiMail />
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/bhamarekomal07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-surface-light/60 border border-primary/10 text-text-secondary hover:text-primary-light hover:border-primary/30 hover:bg-surface-light transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/komal-bhamare-2458a1334"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-surface-light/60 border border-primary/10 text-text-secondary hover:text-primary-light hover:border-primary/30 hover:bg-surface-light transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:bhamarekomal07@gmail.com"
            className="p-3 rounded-xl bg-surface-light/60 border border-primary/10 text-text-secondary hover:text-primary-light hover:border-primary/30 hover:bg-surface-light transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
          >
            <HiMail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary-light rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
