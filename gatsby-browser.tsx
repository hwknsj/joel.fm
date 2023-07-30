import 'normalize.css'
import { Layout } from '@/components/index'
import type { GatsbyBrowser } from 'gatsby'
import React from 'react'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props
}) => <Layout {...props}>{element}</Layout>
