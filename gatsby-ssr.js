// import './src/lib/normalize.css'
import 'normalize.css'

import './src/lib/css/components/global.css'
import './src/lib/css/screen.css'

import React from 'react'

import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
