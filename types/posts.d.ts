import * as React from 'react'
import type { GatsbyNode } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

export type Fields = {
  slug: string
  url: string
}

export type ChildImageSharp = {
  gatsbyImageData: IGatsbyImageData
}

export type Thumbnail = {
  childImageSharp?: ChildImageSharp
}

export type Frontmatter = Queries.MarkdownRemarkFrontmatter & {
  date?: string
  title: string
  description?: string
  thumbnail?: Thumbnail
  tags?: string[]
  url?: string
}

export interface MarkdownPost {
  readonly node: {
    readonly excerpt: string | null
    readonly fields: { readonly slug: string | null } | null
    readonly frontmatter: {
      readonly date?: string | null
      readonly title?: string | null
      readonly description?: string | null
      readonly thumbnail?: {
        readonly childImageSharp?: {
          readonly gatsbyImageData?: IGatsbyImageData
        } | null
      } | null
    } | null
  }
}

export interface Post {
  node: {
    excerpt?: string | null
    fields: Fields
    frontmatter: Frontmatter
  }
}

export type PostsArray = ReadonlyArray<Post>

export type PostQueryResult = {
  data: Queries.allMarkdownPostsQuery
  errors?: any
}
