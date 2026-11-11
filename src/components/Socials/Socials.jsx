import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { site } from '../../data/site'

export default function Socials({ className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      <li>
        <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <FiGithub />
        </a>
      </li>
      {site.linkedin && (
        <li>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <FiLinkedin />
          </a>
        </li>
      )}
      {site.email && (
        <li>
          <a href={`mailto:${site.email}`} aria-label="Send an email">
            <FiMail />
          </a>
        </li>
      )}
    </ul>
  )
}
