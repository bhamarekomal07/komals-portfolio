import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiC,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGithub,
  SiVscodium,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { HiDocumentText, HiClock, HiUserGroup } from 'react-icons/hi'

const technicalSkills = [
  { name: 'C', icon: SiC, color: '#A8B9CC', level: 85 },
  { name: 'Java', icon: FaJava, color: '#ED8B00', level: 80 },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 90 },
  { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 85 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 80 },
  { name: 'React', icon: SiReact, color: '#61DAFB', level: 75 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 70 },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF', level: 70 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 65 },
]

const tools = [
  { name: 'VS Code', icon: SiVscodium, color: '#007ACC' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
]

const softSkills = [
  { name: 'Documentation', icon: HiDocumentText },
  { name: 'Time Management', icon: HiClock },
  { name: 'Teamwork', icon: HiUserGroup },
]

const certifications = [
  '🏆 First Rank in Googler at Converges 25 — RCPIT Shirpur',
  '📜 C Programming — Infosys Springboard',
  '📜 Java & C Courses — CodeChef',
  '🤖 AI Aware Program — Intel',
  '💻 Full Stack Development Internship — Edureka',
  '🏅 Techquezt #22 Coding Culture — Naukri Campus',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I Know
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            💻 Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass-card p-5 text-center group cursor-default glow-hover transition-all duration-300"
              >
                <div
                  className="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    boxShadow: `0 0 0 1px ${skill.color}20`,
                  }}
                >
                  <skill.icon
                    size={28}
                    style={{ color: skill.color }}
                    className="group-hover:drop-shadow-lg transition-all duration-300"
                  />
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">
                  {skill.name}
                </h4>
                {/* Skill bar */}
                <div className="w-full h-1.5 bg-surface-lighter rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              🛠️ Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-3 px-4 py-3 bg-surface-lighter/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-200"
                >
                  <tool.icon size={20} style={{ color: tool.color }} />
                  <span className="text-sm font-medium text-text-primary">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              🤝 Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-3 px-4 py-3 bg-surface-lighter/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-200"
                >
                  <skill.icon className="text-primary-light" size={20} />
                  <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            🎓 Certifications & Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="p-4 bg-surface-lighter/30 rounded-xl border border-primary/10 hover:border-primary/25 hover:bg-surface-lighter/50 transition-all duration-200 cursor-default"
              >
                <p className="text-sm text-text-secondary leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
