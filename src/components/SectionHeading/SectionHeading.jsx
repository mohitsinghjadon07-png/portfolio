import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal'

export default function SectionHeading({ title, subtitle, to, linkLabel, as: Tag = 'h2' }) {
  return (
    <Reveal className="sh">
      <div>
        <Tag className="sh__title">{title}</Tag>
        {subtitle && <p className="sh__sub">{subtitle}</p>}
      </div>
      {to && (
        <Link to={to} className="sh__link">
          {linkLabel}
        </Link>
      )}
    </Reveal>
  )
}
