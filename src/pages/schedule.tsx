import { SEO } from '@/components/seo'
import { graphql, PageProps } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const SchedulePage = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <article className='post-content page-template no-image'>
      <div className='post-content-body'>
        <h2 className='page-head-title'>Schedule</h2>
        <h3 className='subtitle'>to get in touch, use the menu below</h3>
      </div>
      <div className='text-center'>
        <a
          href='https://calendly.com/joel-fm'
          className='button primary large'
          target='_blank'
          alt={`joél's calendly`}
          rel='noopener noreferrer'
        >
          joél&apos;s calendly
        </a>
      </div>
    </article>
  )
}

export const SchedulePageQuery = graphql`
  query SchedulePage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

SchedulePage.propTypes = {
  query: PropTypes.string.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      })
    })
  })
}

export default SchedulePage

export const Head = ({ data }: PageProps<Queries.SchedulePageQuery>) => (
  <SEO title={`Schedule & Booking | ${data.site.siteMetadata.title}`} />
)
