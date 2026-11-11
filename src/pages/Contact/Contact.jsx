import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import PageWrap from '../../components/PageWrap/PageWrap'
import Reveal from '../../components/Reveal/Reveal'
import Magnetic from '../../components/Magnetic/Magnetic'
import { site } from '../../data/site'

export default function Contact() {
  const channels = [
    { icon: FiGithub, title: 'GitHub', text: 'See my code and open an issue or discussion.', href: site.github, label: 'Open GitHub' },
    site.linkedin && { icon: FiLinkedin, title: 'LinkedIn', text: 'Connect with me professionally.', href: site.linkedin, label: 'Open LinkedIn' },
    site.email && { icon: FiMail, title: 'Email', text: site.email, href: `mailto:${site.email}`, label: 'Send an email' },
  ].filter(Boolean)

  return (
    <PageWrap>
      <div className="container page-head">
        <h1>Contact</h1>
        <p>Open to conversations about security, cloud, projects and hackathon teams.</p>
      </div>
      <section className="container">
        <div className="grid grid--3">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="tile glass">
              <c.icon className="tile__icon" aria-hidden="true" />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <Magnetic>
                <a className="btn btn--primary" href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
              </Magnetic>
            </Reveal>
          ))}
        </div>
        {channels.length === 1 && (
          <Reveal className="note glass">
            <p>GitHub is the best way to reach me right now. More ways to connect will appear here soon.</p>
          </Reveal>
        )}
      </section>
    </PageWrap>
  )
}
