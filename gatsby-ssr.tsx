import 'normalize.css'
import * as React from 'react'
import type { GatsbySSR } from 'gatsby'
import { Layout } from '@/components/index'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props
}) => <Layout {...props}>{element}</Layout>

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents
}) => {
  setHeadComponents([
    <link
      rel='preload'
      href='/fonts/EskapadeFraktur-Regular.otf'
      as='font'
      type='font/otf'
      crossOrigin='anonymous'
      key='EskapadeFraktur-Regular'
    />,
    <link
      rel='preload'
      href='/fonts/EskapadeFraktur-Italic.otf'
      as='font'
      type='font/otf'
      crossOrigin='anonymous'
      key='EskapadeFraktur-Italic'
    />,
    <link
      rel='preload'
      href='/fonts/CorporateS-ProRegular.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
      key='CorporateS-ProRegular'
    />,
    <link
      rel='preload'
      href='/fonts/CorporateSBold.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
      key='CorporateSBold'
    />,
    <link
      rel='preload'
      href='/fonts/CorporateSItalic.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
      key='CorporateSItalic'
    />,
    <link
      rel='preload'
      href='/fonts/CorporateSLight.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
      key='CorporateSLight'
    />,
    <link
      rel='preload'
      href='/fonts/CorporateSMedium.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
      key='CorporateSMedium'
    />,
    <link
      rel='preload'
      href='/fonts/CorporateARegular.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
      key='CorporateARegular'
    />
  ])
}
