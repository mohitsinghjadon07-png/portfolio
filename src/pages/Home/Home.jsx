import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageWrap from '../../components/PageWrap/PageWrap'
import Typewriter from '../../components/Typewriter/Typewriter'
import HeroGraphic from '../../components/HeroGraphic/HeroGraphic'
import Magnetic from '../../components/Magnetic/Magnetic'
import Socials from '../../components/Socials/Socials'
import Counter from '../../components/Counter/Counter'
import Reveal from '../../components/Reveal/Reveal'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ScrollHUD from '../../components/ScrollHUD/ScrollHUD'
import { roles, stats, projects, skills, focus, site } from '../../data/site'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  const { scrollY } = useScroll()
  const artY = useTransform(scrollY, [0, 600], [0, -70])

  return (
    <PageWrap>
      <section className="hero container">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item} className="hero__name">
            Mohit Singh Jadon
          </motion.h1>
          <motion.p variants={item} className="hero__role">
            <Typewriter words={roles} />
          </motion.p>
          <motion.p variants={item} className="hero__lead">
            Second-year Cyber Security student at Acropolis Institute of Technology &amp; Research, Indore. I build
            things in Python and on the web, and I am learning to secure them in the cloud.
          </motion.p>
          <motion.div variants={item} className="hero__cta">
            <Magnetic>
              <Link className="btn btn--primary" to="/about">About me</Link>
            </Magnetic>
            <Magnetic>
              <Link className="btn btn--ghost" to="/projects">Explore projects</Link>
            </Magnetic>
          </motion.div>
          <motion.div variants={item}>
            <Socials />
          </motion.div>
        </motion.div>
        <motion.div className="hero__art" style={{ y: artY }}>
          <HeroGraphic />
        </motion.div>
      </section>

      <section className="container stats-wrap">
        <Reveal className="stats glass">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong><Counter to={s.value} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section container intro">
        <Reveal className="intro__text">
          <h2 className="sh__title">Learning to break things so I can build them safely</h2>
          <p>
            I am drawn to the point where software meets security. My projects range from an autonomous-vehicle
            planning prototype to a disaster-response dashboard and an algorithm visualizer, and each one taught me
            something about building systems people can rely on.
          </p>
          <p>
            Alongside my B.Tech in Cyber Security I study AWS, networking and cryptography, and I take part in the
            Acropolis Blockchain Club and student technology initiatives.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="intro__focus glass">
          <h3>Current focus</h3>
          <ul>
            {focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeading
          title="Featured projects"
          subtitle="A few things I have built and shipped."
          to="/projects"
          linkLabel="See all projects"
        />
        <div className="grid grid--3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} compact />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          title="Skills"
          subtitle="What I work with and what I am learning."
          to="/about"
          linkLabel="Full skill set"
        />
        <div className="grid grid--skills">
          {skills.slice(0, 8).map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04} className="skill glass">
              <s.icon aria-hidden="true" />
              <div>
                <h3>{s.name}</h3>
                <p>{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <Reveal className="cta glass">
          <h2 className="sh__title">Have an idea, a project or a hackathon team?</h2>
          <p>I am always happy to talk about security, cloud and building useful software.</p>
          <div className="hero__cta">
            <Magnetic>
              <Link className="btn btn--primary" to="/contact">Get in touch</Link>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--ghost" href={site.github} target="_blank" rel="noopener noreferrer">View GitHub</a>
            </Magnetic>
          </div>
        </Reveal>
      </section>
      <ScrollHUD />
    </PageWrap>
  )
}
