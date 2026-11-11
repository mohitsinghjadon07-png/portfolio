import { Link } from 'react-router-dom'
import PageWrap from '../../components/PageWrap/PageWrap'

export default function NotFound() {
  return (
    <PageWrap>
      <section className="container notfound">
        <h1>404: page not found</h1>
        <p>That route does not exist. Head back to a page that does.</p>
        <Link className="btn btn--primary" to="/">Go to home</Link>
      </section>
    </PageWrap>
  )
}
