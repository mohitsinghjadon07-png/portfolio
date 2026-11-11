
import { motion } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0,
  y = 45,
  className = '',
  as = 'div'
}) {
  const Tag = motion[as] || motion.div

  return (
    <Tag
      className={`reveal-zoom ${className}`.trim()}
      initial={{
        opacity: 0,
        y,
        scale: 0.78,
        rotateX: 7,
        filter: 'blur(5px)'
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)'
      }}
      viewport={{
        once: true,
        amount: 0.12
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        transformOrigin: 'center center',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </Tag>
  )
}
