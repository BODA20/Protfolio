import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen relative font-sans">
      <Background />
      <Navbar />
      <main className="relative z-10 pt-20">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
