import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const PostCard = ({ count, postClass, node }) => {
  return (
    <article
      className={`post-card ${
        count % 3 === 0 && `post-card-large`
      } ${postClass} ${node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
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
}

PostCard.propTypes = {
  count: PropTypes.number,
  postClass: PropTypes.string,
  node: PropTypes.object
}

export default PostCard
