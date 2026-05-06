import { useEffect, useRef } from 'react'

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number, y: number, vx: number, vy: number, size: number }[] = []
    const numParticles = Math.floor(window.innerWidth / 15)
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      })
    }

    let mouseX = -1000
    let mouseY = -1000

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)'
      ctx.lineWidth = 1
      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = 'rgba(0, 126, 185, 0.6)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Interaction with mouse
        const dxMouse = mouseX - p.x
        const dyMouse = mouseY - p.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        if (distMouse < 150) {
          ctx.strokeStyle = `rgba(255, 153, 0, ${1 - distMouse / 150})`
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.stroke()
        }

        // Connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.strokeStyle = `rgba(0, 126, 185, ${0.2 * (1 - dist / 100)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(draw)
    }

    draw()

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-60"
    />
  )
}

export default Background
