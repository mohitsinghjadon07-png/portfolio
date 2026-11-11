import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function IntroScreen() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('msj-intro-seen'))
  const [leaving, setLeaving] = useState(false)

  const begin = () => {
    setLeaving(true)
    sessionStorage.setItem('msj-intro-seen', '1')
    window.setTimeout(() => setVisible(false), 1050)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.section className="intro-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Portfolio introduction">
          <div className="intro-screen__grid" aria-hidden="true" />
          <div className="intro-screen__top"><span>MSJ / PORTFOLIO</span><span>INDEPENDENT DIGITAL SPACE · 2026</span></div>
          <motion.div className="intro-screen__content" animate={leaving ? { scale: 0.92, opacity: 0, y: -30 } : {}}>
            <p className="intro-screen__eyebrow"><i /> CYBERSECURITY · DEVELOPMENT · CURIOSITY</p>
            <h1>Ideas into<br /><em>impact.</em></h1>
            <p className="intro-screen__desc">A digital space by Mohit Singh Jadon.<br />Explore what I build, what I learn, and what comes next.</p>
            <button className="intro-screen__button" onClick={begin} disabled={leaving}>
              <span>LET'S BEGIN</span><b>↗</b>
            </button>
          </motion.div>
          <div className="intro-screen__bottom"><span>INDORE, INDIA</span><span>SCROLL TO EXPLORE ↓</span></div>
          {leaving && <div className="pixel-wipe" aria-hidden="true">{Array.from({ length: 120 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div>}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
