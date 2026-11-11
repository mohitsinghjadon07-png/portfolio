import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectArt from '../ProjectArt/ProjectArt'
import { site } from '../../data/site'

export default function ProjectCard({ project, compact = false }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const source = project.repo || site.github

  return (
    <motion.article
      className="pcard glass"
      onMouseMove={onMove}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div className="pcard__art">
        <ProjectArt kind={project.art} />
        <span className="pcard__tag">{project.tag}</span>
      </div>
      <div className="pcard__body">
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        {!compact && <p className="pcard__detail">{project.details}</p>}
        <ul className="chips">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="pcard__links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="pcard__link pcard__link--main">
              <FiExternalLink aria-hidden="true" /> Live demo
            </a>
          )}
          <a href={source} target="_blank" rel="noopener noreferrer" className="pcard__link">
            <FiGithub aria-hidden="true" /> {project.repo ? 'Source code' : 'GitHub profile'}
          </a>
        </div>
      </div>
    </motion.article>
  )
}
