import 'normalize.css'

import React from 'react'
import type {
  GatsbySSR
  // ,GetServerDataProps
  // ,GetServerDataReturn
} from 'gatsby'

import Layout from '@/components/Layout'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props
}) => <Layout {...props}>{element}</Layout>
