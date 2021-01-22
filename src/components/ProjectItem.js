import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

// this provides a full width "post-card"

const ProjectItem = ({ postClass, node }) => (
  <article
    className={`post-card post-card-large ${postClass} ${
      node.frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
    style={
      node.frontmatter.thumbnail && {
        backgroundImage: `url(${node.frontmatter.thumbnail.childImageSharp.fluid.src})`
      }
    }
  >
    <Link to={node.fields.slug} className='post-card-link'>
      <div className='post-card-content'>
        <h2 className='post-card-title'>
          {node.frontmatter.title || node.fields.slug}
        </h2>
      </div>
    </Link>
  </article>
)

ProjectItem.propTypes = {
  postClass: PropTypes.string,
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string
          })
        })
      })
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string
    })
  })
}

export default ProjectItem
