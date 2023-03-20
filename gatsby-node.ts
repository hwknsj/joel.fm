import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import type { GatsbyNode } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type Fields = {
  slug: string
}

type ChildImageSharp = {
  gatsbyImageData: IGatsbyImageData
}

type Thumbnail = {
  childImageSharp?: ChildImageSharp
}

type Frontmatter = {
  date?: string | null,
      title?: string | null,
      description?: string | null,
      thumbnail?: Thumbnail
}

interface Post {
  node: {
    excerpt?: string | null
    fields?: Fields
    frontmatter?: Frontmatter
  }
}

interface PostsArray extends ReadonlyArray<Post> {}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/lib': path.resolve(__dirname, 'src/lib'),
        '@/pages': path.resolve(__dirname, 'src/pages'),
        '@/images': path.resolve(__dirname, 'src/images'),
        '@/templates': path.resolve(__dirname, 'src/templates'),
        '@/assets': path.resolve(__dirname, 'content/assets'),
        assets: path.resolve(__dirname, 'content/assets'),
        '@/projects': path.resolve(__dirname, 'content/projects')
      }
    }
  })
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then((result: { data: { allMarkdownRemark: { edges: PostsArray }}, errors: unknown }) => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges

    posts?.forEach((post: Post, index: number) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })

    return null
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
    createNodeField({
      name: `url`,
      node,
      value
    })
  }
}
