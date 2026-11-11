import PageWrap from '../../components/PageWrap/PageWrap'
import Reveal from '../../components/Reveal/Reveal'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects, site } from '../../data/site'

export default function Projects() {
  return (
    <PageWrap>
      <div className="container page-head">
        <h1>Projects</h1>
        <p>Prototypes and concepts from hackathons, coursework and curiosity.</p>
      </div>
      <section className="container">
        <div className="grid grid--2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="note glass">
          <p>
            Projects without a public repository link to my{' '}
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub profile</a> for now.
          </p>
        </Reveal>
      </section>
    </PageWrap>
  )
}
