import { motion } from 'framer-motion'
import { Terminal, Github } from 'lucide-react'

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-aws-navy/70 backdrop-blur-md border-b border-aws-blue/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 text-aws-orange font-mono font-bold tracking-wider text-sm cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Terminal size={18} />
          <span>AWS_REGION="us-east-1"</span>
        </div>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest text-gray-400">
            <li onClick={() => scrollTo('architecture')} className="hover:text-aws-blue cursor-pointer transition-colors">/ARCHITECTURE</li>
            <li onClick={() => scrollTo('infrastructure')} className="hover:text-aws-orange cursor-pointer transition-colors">/INFRASTRUCTURE</li>
            <li onClick={() => scrollTo('system_logs')} className="hover:text-white cursor-pointer transition-colors">/SYSTEM_LOGS</li>
          </ul>
          
          <a 
            href="https://github.com/BODA20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-aws-orange transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,153,0,0.8)]"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
