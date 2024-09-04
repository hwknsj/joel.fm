import 'normalize.css'
import type { GatsbySSR } from 'gatsby'
import { Layout } from '@/components/index'
import { fontFilenames } from '@/styles/fonts'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props
}) => <Layout {...props}>{element}</Layout>

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents
}) => {
  setHeadComponents([
    <link rel='stylesheet' href='https://use.typekit.net/ctg8wag.css' />,
    ...fontFilenames.map(({ postScriptName, paths: { woff2 } }) => (
      <link
        rel='preload'
        href={woff2}
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
        key={postScriptName}
      />
    ))
  ])
}
