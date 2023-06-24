import { Link } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import React from 'react'

const PostCard = ({ count, postClass, frontmatter, slug }) => {
  return (
    <article
      className={`post-card ${
        count % 3 === 0 && `post-card-large`
      } ${postClass} ${frontmatter.thumbnail ? `with-image` : `no-image`}`}
      style={
        frontmatter.thumbnail && {
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
}

PostCard.propTypes = {
  count: PropTypes.number,
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
  slug: PropTypes.string
}

export default PostCard
