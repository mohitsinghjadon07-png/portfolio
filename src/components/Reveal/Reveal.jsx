
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 34, className = '', as = 'div' }) {
  const Tag = motion[as] || motion.div

  return (
    <Tag
      className={`reveal-zoom ${className}`.trim()}
      initial={{
        opacity: 0,
        y,
        scale: 0.88,
        rotateX: 5,
        filter: 'blur(7px)'
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      transition={{
        duration: 0.82,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        transformOrigin: '50% 50%',
        willChange: 'transform, opacity, filter'
      }}
    >
      {children}
    </Tag>
  )
}
