import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import SEO from '../components/SEO'

const AboutPage = () => {
  const indexQuery = graphql`
    query {
      resumeUrl: file(relativePath: { eq: "files/joel-hawkins-resume.pdf" }) {
        publicURL
      }
    }
  `
  const data = useStaticQuery(indexQuery)
  const resumeUrl = data.resumeUrl.publicURL

  return (
    <div>
      <SEO
        title='About'
        keywords={[
          'blog',
          'joel',
          'hawkins',
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
            <p>
              First, have a look at &nbsp;
              <a href={resumeUrl} target='_blank' rel='noopener noreferrer'>
                my resume
              </a>
              .
            </p>
            <p>Also find me on the socials:</p>
            <p>
              <span>
                <ul className='inline-list serif italic'>
                  <li className='inline inline-item'>
                    <a
                      href='https://www.linkedin.com/in/hwknsj/'
                      title='LinkedIn'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className='inline inline-item'>
                    <a
                      href='https://github.com/hwknsj'
                      title='Github'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Github
                    </a>
                  </li>
                  <li className='inline inline-item'>
                    <a
                      href='https://www.instagram.com/joel.biz/'
                      title='Instagram'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Instagram
                    </a>
                  </li>
                  <li className='inline inline-item'>
                    <a
                      href='https://www.behance.net/hwknsj'
                      title='Behance'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Behance
                    </a>
                  </li>
                </ul>
              </span>
            </p>
          </div>
          <div>
            <h4>Introduction</h4>
            <p className='serif'>
              I’m a web developer specializing in JavaScript, front & back. With
              5+ experience, a background in physics, data
              analysis/visualization, & 4 years of professional JS web
              development, I’ve cultivated a diverse skill set. Working in
              diverse agile teams of designers, artists, engineers, executives,
              and with my own clients, I prioritize delivering efficient,
              optimized apps. utilizing the latest tech/best practices.
            </p>
            <p className='serif'>
              My skills may be described as ‘full stack’–though I find this term
              minimizes my emphasis aesthetic design & user experience. By
              continuously expanding my knowledge of front & back-end
              development I have the unique ability to create intuitive,
              cohesive applications that take full advantage of the interactive
              nature of the web—always elegant, efficient, & engaging. Formally
              educated in physics, mathematics, computation, music composition,
              and digital art, my multi-disciplinary approach to problem-solving
              delivers creative solutions to complexity.
            </p>
            <p className='serif'>
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
            <p className='serif'>
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
              >
                thesis.joel.fm.
              </a>
            </p>
          </div>
          <hr />
          <div>
            <h4>About this site</h4>
            <p className='serif'>
              I developed this website using the following technologies and
              tools:
              <ul>
                <li>
                  <a
                    href='https://www.gatsbyjs.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Gatsby.js
                  </a>
                </li>
                <li>
                  <a
                    href='https://reactjs.org/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    React.js
                  </a>
                </li>
                <li>
                  <a
                    href='https://nodejs.org/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Node.js
                  </a>
                </li>
                <li>
                  <a
                    href='https://styled-components.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Styled-Components
                  </a>
                </li>
                <li>
                  CSS (with{' '}
                  <a
                    href='https://postcss.org/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    PostCss
                  </a>
                  )
                </li>
                <li>
                  <a
                    href='https://graphql.org/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    GraphQL
                  </a>
                </li>
              </ul>
            </p>
            <p className='serif'>
              For the curious, the heading typeface is{' '}
              <a
                href='https://www.type-together.com/eskapade-font/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Eskapade Fraktur
              </a>
              , the body text is{' '}
              <a
                href='https://www.myfonts.com/fonts/urw/corporate-a/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Corporate A Std
              </a>
              .
            </p>
            <p className='serif italic'>
              All images that appear on this site are my own work.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default AboutPage
