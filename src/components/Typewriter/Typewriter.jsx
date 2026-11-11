import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function Typewriter({ words, speed = 70, pause = 1400 }) {
  const [text, setText] = useState('')
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return undefined
    let i = 0
    let j = 0
    let deleting = false
    let timer
    const tick = () => {
      const word = words[i]
      if (!deleting) {
        j += 1
        setText(word.slice(0, j))
        if (j === word.length) {
          deleting = true
          timer = setTimeout(tick, pause)
          return
        }
      } else {
        j -= 1
        setText(word.slice(0, j))
        if (j === 0) {
          deleting = false
          i = (i + 1) % words.length
        }
      }
      timer = setTimeout(tick, deleting ? 35 : speed)
    }
    timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [words, speed, pause, reduce])

  return (
    <span className="typewriter" aria-label={words.join(', ')}>
      <span aria-hidden="true">{reduce ? words[0] : text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  )
}
