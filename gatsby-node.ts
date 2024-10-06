import * as React from 'react'
import path from 'node:path'
import { createFilePath } from 'gatsby-source-filesystem'
import type { GatsbyNode } from 'gatsby'
import type { Post } from 'types/posts'

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
      const { edges } = result?.data?.allMarkdownRemark

      edges?.forEach((edge, index: number) => {
        const previous =
          index === edges.length - 1 ? null : edges[index + 1].node
        const next = index === 0 ? null : edges[index - 1].node
        const {
          node: {
            fields: { slug },
            frontmatter: { title }
          }
        } = edge as Post
        createPage({
          path: slug,
          component: blogPost,
          context: {
            slug,
            previous,
            next,
            title
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

// type Fields {
//   slug: String
//   url: String
// }

// type MarkdownRemark implements Node @dontInfer {
//   frontmatter: Frontmatter
//   fields: Fields
//   excerpt: String
// }
// type Frontmatter {
//   date: Date @dateformat
//   title: String!
//   description: String
//   url: String
//   tags: [String]
//   thumbnail: File @fileByRelativePath
// }
