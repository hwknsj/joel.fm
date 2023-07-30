import 'normalize.css'
import React from 'react'
import type { GatsbySSR } from 'gatsby'
import { Layout } from '@/components/index'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props
}) => <Layout {...props}>{element}</Layout>
