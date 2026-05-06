import { useState, useEffect } from 'react'

const Footer = () => {
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}h ${m}m ${s}s`
  }

  return (
    <footer id="system_logs" className="bg-aws-dark border-t border-aws-border mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-8 font-mono text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex flex-col gap-1">
          <div className="text-gray-400">
            <span className="text-green-400">root@abdurrahman:</span><span className="text-aws-blue">/var/log</span>$ tail -f system.log
          </div>
          <div className="text-gray-500 text-xs mt-1">
            [OK] System online. Uptime: {formatUptime(uptime)}<br/>
            [INFO] Ready for new connections.
          </div>
        </div>

        <div className="flex gap-6">
          <a href="mailto:boda.saber.dev@gmail.com" className="text-gray-400 hover:text-aws-orange transition-colors">
            EMAIL_PROTOCOL
          </a>
          <a href="https://www.linkedin.com/in/abdelrahman-fattouh-1165bb407" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-aws-blue transition-colors">
            LINKEDIN_GATEWAY
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
