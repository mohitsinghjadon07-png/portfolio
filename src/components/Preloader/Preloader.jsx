import { AnimatePresence, motion } from 'framer-motion'

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          role="status"
          aria-label="Loading portfolio"
        >
          <div className="preloader__ring">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <linearGradient id="plG" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#a78bfa" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="52" className="preloader__track" />
              <circle cx="60" cy="60" r="52" className="preloader__arc" stroke="url(#plG)" />
            </svg>
            <span className="preloader__mark">MSJ</span>
          </div>
          <p className="preloader__text">Starting secure session</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
