import { motion } from 'framer-motion'
import { Server, Database, Cloud } from 'lucide-react'

const Skills = () => {
  const racks = [
    {
      id: 'backend',
      icon: Server,
      title: 'Backend Core',
      color: 'border-aws-blue',
      glow: 'group-hover:shadow-[0_0_20px_rgba(0,126,185,0.3)]',
      items: ['Node.js', 'Express', 'TypeScript', 'RESTful API', 'JWT Auth']
    },
    {
      id: 'data',
      icon: Database,
      title: 'Data Layer',
      color: 'border-green-500',
      glow: 'group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
      items: ['PostgreSQL', 'Knex.js', 'Database Design', 'Query Optimization', 'Transactions']
    },
    {
      id: 'infra',
      icon: Cloud,
      title: 'Infrastructure',
      color: 'border-aws-orange',
      glow: 'group-hover:shadow-[0_0_20px_rgba(255,153,0,0.3)]',
      items: ['AWS (EC2, S3, RDS)', 'Docker', 'Linux/Ubuntu', 'Nginx & PM2', 'CI/CD Pipelines']
    }
  ]

  return (
    <section id="architecture" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl font-mono font-bold text-white tracking-widest">
          <span className="text-aws-blue">&lt;</span>SYSTEM_ARCHITECTURE<span className="text-aws-blue">/&gt;</span>
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-aws-border to-transparent" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {racks.map((rack, i) => {
          const Icon = rack.icon
          return (
            <motion.div
              key={rack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`group relative bg-aws-dark/50 border ${rack.color} p-6 overflow-hidden transition-all duration-300 ${rack.glow}`}
            >
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className={`w-2 h-2 rounded-full ${rack.color.replace('border-', 'bg-')} animate-pulse`} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <Icon className={`text-${rack.color.split('-')[1]} w-6 h-6`} />
                <h3 className="font-mono text-sm tracking-widest uppercase text-gray-300">{rack.title}</h3>
              </div>

              <div className="space-y-3 relative z-10">
                {rack.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-sm" />
                    <span className="font-mono text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              {/* Wire decorations */}
              <div className="absolute bottom-0 left-6 w-px h-full bg-gradient-to-t from-transparent to-white/5" />
              <div className="absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent to-white/5" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
