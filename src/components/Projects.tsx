import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Box, Shield, Zap } from 'lucide-react'

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'Hospital Management System',
      description: 'A comprehensive, security-first backend for managing patients, medical records, appointments, and access control.',
      tech: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Knex.js'],
      icon: Shield,
      flow: ['Client Req', 'Role Guard (RBAC)', 'Validator', 'Knex Service', 'PostgreSQL Data'],
      color: 'blue'
    },
    {
      title: 'Nova Tour API',
      description: 'Production-grade REST API for a tour booking platform handling multi-role users, complex filtering, and atomic booking.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
      icon: Zap,
      flow: ['API Request', 'Auth Middleware', 'APIFeatures Class', 'Mongoose Models', 'MongoDB Cluster'],
      color: 'orange'
    }
  ]

  return (
    <section id="infrastructure" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl font-mono font-bold text-white tracking-widest">
          <span className="text-aws-orange">~</span>/FEATURED_BLUEPRINTS
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-aws-border to-transparent" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((proj, idx) => {
          const isActive = activeProject === idx
          const Icon = proj.icon
          const colorClass = proj.color === 'blue' ? 'text-aws-blue border-aws-blue' : 'text-aws-orange border-aws-orange'
          const bgGlow = proj.color === 'blue' ? 'bg-aws-blue/5' : 'bg-aws-orange/5'

          return (
            <motion.div 
              key={idx}
              layout
              onClick={() => setActiveProject(isActive ? null : idx)}
              className={`cursor-pointer border ${bgGlow} border-aws-border hover:${colorClass.split(' ')[1]} p-8 relative overflow-hidden transition-colors duration-300`}
            >
              {/* Blueprint Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
              />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${proj.color === 'blue' ? 'text-aws-blue' : 'text-aws-orange'}`} />
                  <h3 className="text-xl font-mono font-bold text-gray-200">{proj.title}</h3>
                </div>
                <Box className="w-5 h-5 text-gray-600" />
              </div>

              <p className="text-gray-400 font-sans text-sm mb-6 relative z-10">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {proj.tech.map(t => (
                  <span key={t} className="px-2 py-1 text-xs font-mono bg-aws-dark border border-gray-800 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-6 mt-6 border-t border-aws-border relative z-10 overflow-hidden"
                  >
                    <h4 className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">System Flow Architecture</h4>
                    <div className="flex flex-col gap-2 font-mono text-sm">
                      {proj.flow.map((step, stepIdx) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className={`p-2 border border-gray-800 bg-aws-dark flex-1 ${proj.color === 'blue' ? 'text-aws-blue' : 'text-aws-orange'}`}>
                            {step}
                          </div>
                          {stepIdx < proj.flow.length - 1 && (
                            <motion.div
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: stepIdx * 0.15 }}
                            >
                              <ArrowRight className="w-4 h-4 text-gray-600" />
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
