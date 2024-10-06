import { Link } from 'gatsby'
import { IGatsbyImageData, getSrc } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import cx from 'classnames'
import type { Thumbnail } from '@/types/posts'
import React from 'react'

interface PostCardProps {
  count: number
  postClass?: string
  frontmatter: {
    title: string
    thumbnail?: Thumbnail
  }
  slug: string
}

const PostCard = ({ count, postClass, frontmatter, slug }: PostCardProps) => {
  return (
    <article
      className={cx(
        `post-card`,
        {
          ['post-card-large']: count % 3 === 0,
          [`no-image`]: !frontmatter.thumbnail,
          [`with-image`]: frontmatter.thumbnail
        },
        postClass
      )}
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
