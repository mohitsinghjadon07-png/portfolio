import { useState } from 'react'
import { FiBookOpen, FiGithub, FiUsers, FiMapPin } from 'react-icons/fi'
import PageWrap from '../../components/PageWrap/PageWrap'
import Reveal from '../../components/Reveal/Reveal'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { site, skills, skillGroups, tools, learning, focus } from '../../data/site'

const interests = [
  { t: 'Cybersecurity', d: 'Understanding threats and how systems are defended.' },
  { t: 'Ethical hacking', d: 'Learning attacker techniques to build stronger defenses.' },
  { t: 'Cloud and AWS', d: 'Designing and securing workloads in the cloud.' },
  { t: 'Software development', d: 'Turning ideas into working Python and web projects.' },
]

export default function About() {
  const [avatarOk, setAvatarOk] = useState(true)
  return (
    <PageWrap>
      <div className="container page-head">
        <h1>About me</h1>
        <p>A student, a builder and a curious security mind.</p>
      </div>

      <section className="container about-top">
        <Reveal className="about-text">
          <p>
            I am Mohit Singh Jadon, a second-year B.Tech student in Cyber Security. I love technology and innovation,
            and I learn best by building: I write Python, make web projects and enter hackathons to test ideas under
            pressure.
          </p>
          <p>
            My interest in security started with the question of how systems fail. It now covers ethical hacking,
            networking, cryptography and cloud security on AWS.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="edu glass">
          <FiBookOpen aria-hidden="true" />
          <h2>Education</h2>
          <p className="edu__main">B.Tech in Cyber Security</p>
          <p>Acropolis Institute of Technology &amp; Research</p>
          <p className="edu__meta"><FiMapPin aria-hidden="true" /> Indore, Madhya Pradesh, India</p>
          <p className="edu__meta">Currently in second year</p>
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeading title="Cybersecurity interests" />
        <div className="grid grid--4">
          {interests.map((i, n) => (
            <Reveal key={i.t} delay={n * 0.06} className="tile glass">
              <h3>{i.t}</h3>
              <p>{i.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeading title="Learning journey" subtitle="Courses and topics I have studied so far." />
        <div className="grid grid--3">
          {learning.map((l, n) => (
            <Reveal key={l.title} delay={n * 0.05} className="tile glass">
              <h3>{l.title}</h3>
              <p>{l.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeading title="Current focus" />
        <Reveal className="focus-list glass">
          <ul>
            {focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeading title="Technical skills" subtitle="Grouped by what they help me do." />
        {skillGroups.map((g) => (
          <div key={g.key} className="skill-group">
            <Reveal>
              <h3 className="skill-group__title">{g.title}</h3>
              <p className="skill-group__blurb">{g.blurb}</p>
            </Reveal>
            <div className="grid grid--skills">
              {skills.filter((s) => s.group === g.key).map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05} className="skill glass">
                  <s.icon aria-hidden="true" />
                  <div>
                    <h4>{s.name}</h4>
                    <p>{s.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section container">
        <SectionHeading title="Tools and technologies" />
        <Reveal>
          <ul className="chips chips--lg">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeading title="Community and hackathons" />
        <div className="grid grid--2">
          <Reveal className="tile glass">
            <FiUsers className="tile__icon" aria-hidden="true" />
            <h3>Acropolis Blockchain Club</h3>
            <p>Involved in the club and in student technology initiatives at Acropolis.</p>
          </Reveal>
          <Reveal delay={0.08} className="tile glass">
            <FiUsers className="tile__icon" aria-hidden="true" />
            <h3>Hackathons</h3>
            <p>
              Participated in hackathon projects and collaborative technical activities. ROADmind began as a
              hackathon prototype.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section container">
        <Reveal className="gh glass">
          {avatarOk && (
            <img
              src={`${site.github}.png?size=200`}
              alt="Mohit Singh Jadon GitHub avatar"
              width="96"
              height="96"
              loading="lazy"
              onError={() => setAvatarOk(false)}
            />
          )}
          <div>
            <h2 className="sh__title">Find my code on GitHub</h2>
            <p>Repositories, experiments and project updates live at github.com/mohitsinghjadon07-png.</p>
            <a className="btn btn--primary" href={site.github} target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" /> Open GitHub profile
            </a>
          </div>
        </Reveal>
      </section>
    </PageWrap>
  )
}
