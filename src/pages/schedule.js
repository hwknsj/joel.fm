import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { InlineWidget } from 'react-calendly'

import SEO from '../components/SEO'

const CalendlyContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* max-width: 100%; */
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: visible;
  iframe {
    box-sizing: border-box;
    overflow-y: visible;
    height: 100vh;
  }
  .calendly-inline-widget {
    margin: 0;
    padding: 0;
    z-index: 999;
    min-height: 100%;
    width: 100%;
    flex: 1 0 auto;
    html,
    body {
      margin: 0;
      padding: 0;
    }
  }
`

const SchedulePage = ({ data, query }) => {
  // const { title, description } = data.site.siteMetadata

  return (
    <>
      <SEO
        title='Schedule & Booking'
        keywords={[
          'blog',
          'joel',
          'hawkins',
          'joel hawkins',
          'joel.biz',
          'joél hawkins torres',
          'calendar',
          'contact',
          'schedule',
          'meeting',
          'interview',
          'consultation',
          'developer',
          'front-end',
          'front end',
          'web design',
          'web',
          'web development',
          'senior developer',
          'ui',
          'user interface',
          'design',
          'artwork',
          'software',
          'engineer',
          'nike',
          'ebay',
          'reed college',
          'joelhawkins',
          'hwknsj',
          'calendly',
          'ical',
          'outlook',
          'google calendar',
          'booking',
          'event',
          'gatsby',
          'javascript',
          'react'
        ]}
      />

      <article className='post-content page-template no-image'>
        <div className='post-content-body'>
          <h2 className='page-head-title'>Schedule</h2>
          <h3 className='subtitle'>to get in touch, use the menu below</h3>
        </div>
        <div>
          <InlineWidget
            className='calendly-inline-widget my-0 mx-0'
            url={`https://calendly.com/joel-fm`}
            styles={{
              // minHeight: '1000px',
              height: 'inherit',
              overflowY: 'visible'
            }}
          />
        </div>
      </article>
    </>
  )
}

export const schedulePageQuery = graphql`
  query {
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
  data: PropTypes.object.isRequired
}

export default SchedulePage
