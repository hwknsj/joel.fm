import 'normalize.css'
import React from 'react'
import type { GatsbySSR } from 'gatsby'
import Layout from './src/components/Layout'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props
}) => <Layout {...props}>{element}</Layout>
