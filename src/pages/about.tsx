import { InfoBox } from '@/components/InfoBox'
import { SectionSerif } from '@/components/SectionSerif'
import SEO from '@/components/SEO'
import SocialLinks from '@/components/SocialLinks'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

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
          'torres',
          'joel torres',
          'joel.fm',
          'joel hawkins',
          'joel.biz',
          'gatsby',
          'javascript',
          'typescript',
          'jtor',
          'nike',
          'react',
          'web development'
        ]}
      />

      <article className='post-content page-template no-image'>
        <main className='post-content-body'>
          <h2>About Joél</h2>
          <InfoBox>
            <h4 className='text-center'>
              First, have a look at &nbsp;
              <a
                id='resume'
                className='button primary large fit mt-4 mb-0'
                href={resumeUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label="joél's resume"
              >
                my resume
              </a>
            </h4>
            <hr />
            <p>Also find me on the socials:</p>
            <SocialLinks resumeUrl={resumeUrl} />
          </InfoBox>
          <hr />
          <SectionSerif className='serif'>
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
              & interactive visualization are available at&nbsp;
              <a
                href='https://thesis.joel.fm/'
                rel='noopener noreferrer'
                target='_blank'
                alt={`Joél's Thesis`}
                aria-label={`Joel's thesis at thesis.joel.fm/`}
              >
                thesis.joel.fm
              </a>
              .
            </p>
          </SectionSerif>
          <hr />
          <SectionSerif className='serif'>
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
                  title='Gatsby.js'
                >
                  Gatsby.js
                </a>
              </li>
              <li>
                <a
                  href='https://reactjs.org/'
                  rel='noopener noreferrer'
                  target='_blank'
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
                  title='GraphQL'
                >
                  GraphQL
                </a>
              </li>
            </ul>
            <p>
              The
              <a
                href='https://github.com/hwknsj/joel.fm'
                target='_blank'
                rel='noopener noreferrer'
              >
                source code for which is available on Github
              </a>
              (<span className='italic'>for now...</span>).
            </p>
            <p>
              For the curious, the heading typeface is
              <a
                href='https://www.type-together.com/eskapade-font/'
                rel='noopener noreferrer'
                target='_blank'
                className='fraktur'
              >
                Eskapade Fraktur
              </a>
              and the body text is
              <a
                href='https://www.myfonts.com/fonts/urw/corporate-a/'
                rel='noopener noreferrer'
                target='_blank'
                className='serif'
              >
                Corporate A Std
              </a>
              .
            </p>
            <p className='italic'>
              All images that appear on this site are my own work
              <span className='text-light'>(unless stated otherwise)</span>.
            </p>
          </SectionSerif>
        </main>
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
