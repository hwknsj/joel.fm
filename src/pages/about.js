import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import SEO from '../components/SEO'
import SocialLinks from '../components/SocialLinks'

const AboutPage = ({
  data: {
    site: {
      siteMetadata: { title }
    },
    resumePublicUrl: { publicURL }
  }
}) => {
  const resumeUrl = publicURL
  return (
    <>
      <SEO
        title={`About | ${title}`}
        keywords={[
          'blog',
          'joel',
          'hawkins',
          'joel.fm',
          'joel hawkins',
          'joel.biz',
          'gatsby',
          'javascript',
          'react'
        ]}
      />

      <article className='post-content page-template no-image'>
        <div className='post-content-body'>
          <h2>About Joél</h2>
          <div
            style={{
              backgroundColor: '#efefef',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              padding: '3rem 0'
            }}
          >
            <h4 className='center-text'>
              First, have a look at &nbsp;
              <a
                id='resume'
                className='button primary large fit mt-4 mb-0'
                href={resumeUrl}
                target='_blank'
                rel='noopener noreferrer'
                alt="joél's resume"
              >
                my resume
              </a>
            </h4>
            <hr />
            <p>Also find me on the socials:</p>
            <SocialLinks resumeUrl={resumeUrl} />
          </div>
          <hr />
          <div className='serif'>
            <h3>Introduction</h3>
            <p>
              I’m a web developer specializing in JavaScript, front & back. With
              6+ experience, a background in physics, data
              analysis/visualization, & 5+ years of professional web
              development–specializing in JavaScript–I’ve cultivated a diverse
              skill set. Working among some of the most talented designers,
              artists, engineers, executives, as well as my own clients, I
              prioritize delivering efficient, optimized applications,
              emphasizing beauty and style, as well as accessibility,
              implementation of the latest web technologies, and best practices.
            </p>
            <p>
              My skills may be described as ‘full stack’–though I find this term
              minimizes my emphasis on aesthetic design & the importance of the
              user experience. By continuously expanding my knowledge of front &
              back-end development I have the unique ability to create
              intuitive, cohesive applications that take full advantage of the
              interactive nature of the web—always elegant, efficient, &
              engaging. Formally educated in physics, mathematics, computation,
              music composition, and digital art, my multi-disciplinary approach
              to problem-solving delivers creative solutions to complexity.
            </p>
            <p>
              I graduated from Reed College (B.A. Physics, 2015) and authored
              thesis over the entirety of my senior year. I sought to quantify
              subjective visual characteristics (e.g. ‘naturalness’) of
              timevariant patterns formed by computed nonlinear chemical
              reactions first discovered by Alan Turing (‘reaction-diffusion’).
              Utilizing new & increasingly complex mathematical methods known as
              ‘homology’, I performed multi-dimensional computational analysis
              of resulting patterns topology (Python/C). Communicating
              mathematically complex research in a clear & engaging way
              presented a challenge.
            </p>
            <p>
              I looked to the web as an interactive canvas–I built a webpage to
              present the computer generated graphics alongside interactive JS
              data visualizations. The satisfying reward of seeing those with no
              formal math/physics education (i.e. mom) gain an intuitive
              understanding of my work ultimately led me to pursue a career in
              the web. The accessibility of my work has inspired continuing
              research on this topic by successive Reed students. The full text
              & interactive visualization are available at{` `}
              <a
                href='https://thesis.joel.fm/'
                rel='noopener noreferrer'
                target='_blank'
                alt="Joél's Thesis"
              >
                thesis.joel.fm
              </a>
              .
            </p>
          </div>
          <hr />
          <div className='serif'>
            <h3>About this site</h3>
            <p>
              I developed this website using the following technologies and
              tools:
            </p>
            <ul>
              <li>
                <a
                  href='https://www.gatsbyjs.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                  alt='Gatsby.js'
                  title='Gatsby.js'
                >
                  Gatsby.js v3
                </a>
              </li>
              <li>
                <a
                  href='https://reactjs.org/'
                  rel='noopener noreferrer'
                  target='_blank'
                  alt='React.js'
                  title='React.js'
                >
                  React.js
                </a>
              </li>
              <li>
                <a
                  href='https://nodejs.org/'
                  rel='noopener noreferrer'
                  target='_blank'
                  alt='Node.js'
                  title='Node.js'
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href='https://emotion.sh/'
                  rel='noopener noreferrer'
                  target='_blank'
                  alt='emotion'
                  title='emotion'
                >
                  emotion
                </a>
              </li>
              <li>
                <a
                  href='https://polished.js.org/'
                  rel='noopener noreferrer'
                  target='_blank'
                  alt='polished'
                  title='polished'
                >
                  polished
                </a>
              </li>
              <li>
                <a
                  href='https://graphql.org/'
                  rel='noopener noreferrer'
                  target='_blank'
                  alt='GraphQL'
                  title='GraphQL'
                >
                  GraphQL
                </a>
              </li>
            </ul>
            <p>
              The source code for which is available on{' '}
              <a
                href='https://github.com/hwknsj/joel.fm'
                target='_blank'
                rel='noopener noreferrer'
                alt='joel.fm source code'
              >
                Github
              </a>{' '}
              (<span className='italic'>for now...</span>).
            </p>
            <p>
              For the curious, the heading typeface is{' '}
              <a
                href='https://www.type-together.com/eskapade-font/'
                rel='noopener noreferrer'
                target='_blank'
                alt='Eskapade Fraktur'
                className='fraktur'
              >
                Eskapade Fraktur
              </a>
              , the body text is{' '}
              <a
                href='https://www.myfonts.com/fonts/urw/corporate-a/'
                rel='noopener noreferrer'
                target='_blank'
                alt='Corporate A Standard'
                className='serif'
              >
                Corporate A Std
              </a>
              .
            </p>
            <p className='italic'>
              All images that appear on this site are my own work{' '}
              <span className='text-light'>(unless stated otherwise)</span>.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

export const resumeUrlQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    resumePublicUrl: file(
      relativePath: { eq: "files/joel-hawkins-torres-resume.pdf" }
    ) {
      publicURL
    }
  }
`

AboutPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    }),
    resumePublicUrl: PropTypes.shape({
      publicURL: PropTypes.string.isRequired
    }).isRequired
  })
}

export default AboutPage
