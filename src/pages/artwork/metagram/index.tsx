import ImageGrid from '@/components/image-grid'
import { SEO } from '@/components/seo'
import { graphql, useStaticQuery, PageProps } from 'gatsby'
import React from 'react'

// TODO: update with latest posts, if you can find them...

const MetagramPage = ({
  data: {
    site: {
      siteMetadata: {
        title,
        social: { instagram }
      }
    }
  }
}: PageProps<Queries.MetagramPageQuery>) => {
  // const indexQuery = graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `

  const postTitle = `Metagram`
  const postDescription = `Continuous digital art piece presented via Instagram.`
  const postClass = `post`
  // const url = `https://instagram.com/joel.biz`
  const { url, user } = instagram

  // const {
  //   site: {
  //     siteMetadata: { title }
  //   }
  // } = useStaticQuery(indexQuery)

  return (
    <>
      <article className={`post-content ${postClass} page-template no-image`}>
        <header className='post-content-header'>
          <h2 className='post-content-title'>{`${postTitle}`}</h2>
        </header>
        <p className='post-content-excerpt px-4 justify mx-4'>
          {`${postDescription} `}
          See the real thing{' '}
          <a
            href={url}
            target='_blank'
            title={user}
            rel='noopener noreferrer'
            aria-label={`@joel.biz on Instagram`}
          >
            {user}
          </a>
          .
        </p>
        <h6 className='text-center'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            alt={title}
            aria-label={title}
          >
            {url}
          </a>
        </h6>
        <section className='post-content-body'>
          <blockquote>
            I spend a lot of time on Instagram.<p>~ @joel.biz</p>
          </blockquote>
          <hr />
          <ImageGrid />
        </section>
      </article>
    </>
  )
}

export const query = graphql`
  query MetagramPage {
    site {
      siteMetadata {
        title
        social {
          instagram {
            url
            user
          }
        }
      }
    }
  }
`

export default MetagramPage

export const Head = () => <SEO title={`artwork/metagram`} />
