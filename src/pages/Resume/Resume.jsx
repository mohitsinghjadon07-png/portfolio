import { FiDownload, FiPrinter, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import PageWrap from '../../components/PageWrap/PageWrap'
import Reveal from '../../components/Reveal/Reveal'
import { site, skills, tools, learning, projects } from '../../data/site'

export default function Resume() {
  return (
    <PageWrap>
      <div className="container page-head page-head--row">
        <div>
          <h1>Resume</h1>
          <p>A one-page summary of who I am and what I have done.</p>
        </div>
        <div className="page-head__actions no-print">
          {site.resumeFile && (
            <a className="btn btn--primary" href={site.resumeFile} download>
              <FiDownload aria-hidden="true" /> Download resume
            </a>
          )}
          <button type="button" className="btn btn--ghost" onClick={() => window.print()}>
            <FiPrinter aria-hidden="true" /> Print or save as PDF
          </button>
        </div>
      </div>

      <section className="container resume">
        <Reveal className="resume__side glass">
          <h2>{site.name}</h2>
          <p>Cyber Security student and developer</p>
          <ul className="resume__links">
            <li><FiMapPin aria-hidden="true" /> {site.location}</li>
            <li>
              <FiGithub aria-hidden="true" />
              <a href={site.github} target="_blank" rel="noopener noreferrer">github.com/mohitsinghjadon07-png</a>
            </li>
            {site.linkedin && (
              <li>
                <FiLinkedin aria-hidden="true" />
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile</a>
              </li>
            )}
            {site.email && (
              <li>
                <FiMail aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
          </ul>
          <h3>Technical interests</h3>
          <ul className="chips">
            {['Cybersecurity', 'Ethical hacking', 'Cloud computing', 'AWS', 'Python', 'Web development', 'Software development'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <h3>Tools</h3>
          <ul className="chips">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>

        <div className="resume__main">
          <Reveal className="rsec glass">
            <h2>Introduction</h2>
            <p>
              Second-year B.Tech student in Cyber Security who builds in Python and on the web and is learning cloud
              security on AWS. Interested in technology, innovation and solving practical problems.
            </p>
          </Reveal>

          <Reveal className="rsec glass">
            <h2>Education</h2>
            <h3>B.Tech in Cyber Security</h3>
            <p>Acropolis Institute of Technology &amp; Research, Indore, Madhya Pradesh, India</p>
            <p className="muted">Currently in second year</p>
          </Reveal>

          <Reveal className="rsec glass">
            <h2>Skills</h2>
            <ul className="chips">
              {skills.map((s) => (
                <li key={s.name}>{s.name}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="rsec glass">
            <h2>Learning</h2>
            <ul className="rlist">
              {learning.map((l) => (
                <li key={l.title}>
                  <strong>{l.title}</strong>
                  <span>{l.body}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="rsec glass">
            <h2>Selected projects</h2>
            <ul className="rlist">
              {projects.map((p) => (
                <li key={p.id}>
                  <strong>
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noopener noreferrer">{p.name}</a>
                    ) : (
                      p.name
                    )}
                  </strong>
                  <span>{p.summary}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="rsec glass">
            <h2>Community experience</h2>
            <ul className="rlist">
              <li>
                <strong>Acropolis Blockchain Club</strong>
                <span>Involved in the club and student technology initiatives.</span>
              </li>
              <li>
                <strong>Hackathons</strong>
                <span>Participated in hackathon projects and collaborative technical activities.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </PageWrap>
  )
}
