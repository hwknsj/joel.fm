import { SEO } from '@/components/seo'
import { Link } from 'gatsby'
import * as React from 'react'

const NotFoundPage = () => {
  return (
    <article className='post-content page-template no-image'>
      <div className='post-content-body'>
        <h2>404: no page {`here`}, cuz</h2>
        <p className='text-center'>
          you{`&apos;`}re in the wrong place <br />i{`&apos;`}d just{' '}
          <Link to='/'>go home</Link>
        </p>
      </div>
    </article>
  )
}

export default NotFoundPage

export const Head = () => <SEO title={`page not found`} />
