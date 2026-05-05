import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiCode, HiLightBulb, HiUserGroup } from 'react-icons/hi'

const education = [
  {
    degree: 'B.Tech in CSE',
    status: 'S.Y Pursuing',
    institute: 'R C Patel Institute of Technology, Shirpur',
    board: 'DBATU (Lonare) Autonomous',
    year: '2025',
    marks: '73.24% (7.71 CGPA)',
  },
  {
    degree: 'HSC (12th)',
    status: '',
    institute: 'H.R. Patel Junior College, Shirpur',
    board: 'Maharashtra Board (Nashik)',
    year: '2024',
    marks: '84.83%',
  },
  {
    degree: 'SSC (10th)',
    status: '',
    institute: 'H.R. Patel Kanya Madhyamik Vidyalaya, Varul',
    board: 'Maharashtra Board (Nashik)',
    year: '2022',
    marks: '90.60%',
  },
]

const highlights = [
  { icon: HiCode, label: 'Full Stack Dev', desc: 'MERN Stack' },
  { icon: HiAcademicCap, label: 'B.Tech CSE', desc: '7.71 CGPA' },
  { icon: HiLightBulb, label: 'Problem Solver', desc: 'Competitive Coder' },
  { icon: HiUserGroup, label: 'Team Player', desc: 'Leadership' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3 block">
            Get to Know Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: About Text + Highlights */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 mb-8"
            >
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                I'm <span className="text-primary-light font-semibold">Komal Kailas Bhamare</span>, 
                a passionate Computer Science Engineering student from Shirpur, Maharashtra. 
                I love building web applications and solving challenging problems through code.
              </p>
              <p className="text-text-muted leading-relaxed">
                My goal is to secure a role in computer engineering where I can apply my 
                programming and problem-solving skills. I aim to gain practical experience, 
                learn new technologies, and contribute effectively to organizational growth.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-5 text-center group cursor-default glow-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="text-primary-light text-xl" />
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{item.label}</h4>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <HiAcademicCap className="text-primary-light" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="relative pl-12 pb-8 last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-surface group-hover:bg-accent group-hover:ring-surface-light transition-all duration-300" />

                  <div className="glass-card p-5 hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-text-primary">
                        {edu.degree}
                      </h4>
                      {edu.status && (
                        <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary-light rounded-full">
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary mb-1">{edu.institute}</p>
                    <p className="text-xs text-text-muted mb-2">{edu.board}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-text-muted">{edu.year}</span>
                      <span className="text-sm font-semibold text-primary-light">{edu.marks}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
