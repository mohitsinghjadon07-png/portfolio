import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ParticleBackground from './components/ParticleBackground/ParticleBackground'
import Preloader from './components/Preloader/Preloader'
import IntroScreen from './components/IntroScreen/IntroScreen'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import CursorGlow from './components/CursorGlow/CursorGlow'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <Preloader show={loading} />
      {!loading && <IntroScreen />}
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </MotionConfig>
  )
}
