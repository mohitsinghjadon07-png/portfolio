import { Link } from 'react-router-dom'
import Socials from '../Socials/Socials'
import { site } from '../../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{site.name}</p>
          <p className="footer__meta">Cyber Security student and developer, {site.location}</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Socials />
      </div>
      <p className="footer__copy">&copy; {new Date().getFullYear()} {site.name}</p>
    </footer>
  )
}
