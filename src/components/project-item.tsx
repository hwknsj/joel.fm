import { Link } from 'gatsby'
import { ImageDataLike, getSrc } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import React from 'react'

// this provides a full width "post-card"

export interface ProjectItemProps {
  count: number,
  postClass: string,
  frontmatter: {
    title: string,
    thumbnail?: ImageDataLike
  }
  slug: string
}

const ProjectItem = ({ count, postClass, frontmatter, slug }: ProjectItemProps) => (
  <article
    className={`post-card post-card-large ${postClass} ${
      frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
    style={
      frontmatter.thumbnail && {
        // backgroundImage: `url(${frontmatter.thumbnail.childImageSharp.gatsbyImageData.src})`
        backgroundImage: `url(${getSrc(frontmatter.thumbnail)})`
      }
    }
  >
    <Link to={slug} className='post-card-link'>
      <div className='post-card-content'>
        <h2 className='post-card-title'>{frontmatter.title || slug}</h2>
      </div>
    </Link>
  </article>
)

ProjectItem.propTypes = {
  postClass: PropTypes.string,
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object,
        fluid: PropTypes.shape({
          src: PropTypes.string
        })
      })
    })
  }),
  slug: PropTypes.string.isRequired,
  count: PropTypes.number
}

export default ProjectItem
