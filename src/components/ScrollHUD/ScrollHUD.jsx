
import { motion, useScroll, useTransform } from 'framer-motion'

const destinations = [
  { id: 'top', label: 'START' },
  { id: 'story', label: 'STORY' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'contact', label: 'CONTACT' },
]

export default function ScrollHUD() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="scroll-hud"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="scroll-hud__top">
        <span className="scroll-hud__heart">♥</span>
        <span>PLAYER 01</span>
        <span className="scroll-hud__level">LV 02</span>
      </div>

      <div className="scroll-hud__track">
        <motion.div
          className="scroll-hud__fill"
          style={{ scaleX, transformOrigin: 'left' }}
        />
      </div>

      <nav className="scroll-hud__links" aria-label="Quick section navigation">
        {destinations.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </motion.div>
  )
}
