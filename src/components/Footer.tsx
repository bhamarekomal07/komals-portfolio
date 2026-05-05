import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/bhamarekomal07', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/komal-bhamare-2458a1334', label: 'LinkedIn' },
  { icon: HiMail, href: 'mailto:bhamarekomal07@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/10 bg-surface-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="font-display text-3xl font-bold gradient-text">KB</span>
            </a>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              CSE Student & Full Stack Developer building modern web experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary-light transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2.5 rounded-lg bg-surface-lighter/50 border border-primary/10 text-text-muted hover:text-primary-light hover:border-primary/30 transition-all duration-200"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted flex items-center gap-1">
            © {new Date().getFullYear()} Komal Bhamare. Made with{' '}
            <FaHeart className="text-accent text-[10px]" /> using React & Tailwind CSS
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="text-xs text-text-muted hover:text-primary-light transition-colors duration-200"
          >
            ↑ Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
