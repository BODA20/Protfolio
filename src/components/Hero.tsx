import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import DownloadCVButton from './DownloadCVButton'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = '> root@abdurrahman-server:~$ initializing system...'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start max-w-7xl mx-auto px-6">
      <div className="font-mono text-aws-orange text-sm md:text-base h-6 mb-6">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-aws-orange ml-1 align-middle"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="mb-2"
      >
        <h2 className="text-xl md:text-2xl font-mono text-gray-300">Abdurrahman Saber Fatouh</h2>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
      >
        Backend &amp; Aspiring<br />
        <span className="text-aws-blue drop-shadow-[0_0_15px_rgba(0,126,185,0.5)]">
          Cloud Engineer
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        className="text-gray-400 font-mono text-sm max-w-xl mb-12 leading-relaxed"
      >
        Architecting secure, scalable systems that don't break under pressure. 
        Currently migrating mental models from monolithic APIs to distributed cloud infrastructures.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-6 mt-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 bg-aws-dark border border-green-500/50 px-8 py-4 rounded font-mono text-green-400 text-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Activity size={18} className="animate-pulse text-green-400" />
          <span>DEPLOY_SYSTEM()</span>
          <div className="absolute right-0 top-0 w-1 h-full bg-green-500 animate-pulse glow-green" />
        </motion.button>

        <DownloadCVButton />
      </div>
    </section>
  )
}

export default Hero
