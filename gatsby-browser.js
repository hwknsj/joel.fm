import './src/utils/normalize.css'
import './src/utils/css/components/global.css'
import './src/utils/css/screen.css'

import React from 'react'

import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
