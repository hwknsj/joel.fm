import * as React from 'react'
import path from 'node:path'
import { createFilePath } from 'gatsby-source-filesystem'
import type { GatsbyNode } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

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
  date?: string | null
  title?: string | null
  description?: string | null
  thumbnail?: Thumbnail
}

interface Post extends Queries.Query_markdownRemarkArgs {
  node: {
    excerpt?: string | null
    fields: Fields
    frontmatter?: Frontmatter
  }
}

type PostsArray = ReadonlyArray<Post>

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, 'src/'),
        // '@/': require.resolve('./src/'),
        '@/assets': path.resolve(__dirname, 'content/assets'),
        // '@/assets': require.resolve('./content/assets'),
        '@/components': path.resolve(__dirname, 'src/components'),
        // '@/components': require.resolve('./src/components'),
        '@/lib': path.resolve(__dirname, 'src/lib'),
        // '@/lib': require.resolve('./src/lib'),
        '@/images': path.resolve(__dirname, 'src/images'),
        // '@/images': require.resolve('./src/images'),
        '@/pages': path.resolve(__dirname, 'src/pages'),
        // '@/pages': require.resolve('./src/pages'),
        '@/projects': path.resolve(__dirname, 'content/projects'),
        // '@/projects': require.resolve('./content/projects'),
        '@/styles': path.resolve(__dirname, 'src/components/styles'),
        // '@/styles': require.resolve('./src/components/styles'),
        '@/templates': path.resolve(__dirname, 'src/templates')
        // '@/templates': require.resolve('./src/templates')
        // assets: require.resolve(__dirname, 'content/assets')
      }
    }
  })
}

type PostQueryResult = {
  data: { allMarkdownRemark: { edges: PostsArray } }
  errors?: any
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  return await graphql(`
    query allMarkdownPosts {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
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
  `)
    // @ts-expect-error incompatible types
    .then((result: PostQueryResult) => {
      if (result.errors) {
        throw result.errors
      }
      const edges = result?.data?.allMarkdownRemark.edges

      edges?.forEach((edge: Post, index: number) => {
        const previous =
          index === edges.length - 1 ? null : edges[index + 1].node
        const next = index === 0 ? null : edges[index - 1].node

        createPage({
          path: edge.node.fields.slug,
          component: blogPost,
          context: {
            slug: edge.node.fields.slug,
            previous,
            next
          }
        })
      })
    })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
      basePath: './content/projects'
    })
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

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
    }
  `)
  }
