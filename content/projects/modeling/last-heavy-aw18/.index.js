import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Layout from '../../../../src/components/Layout'

const LastHeavyModelingPage = props => {
  const query = graphql`{
  images: allFile(filter: {relativePath: {eq: "./"}, extension: {eq: "jpg"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
}
`
  const data = useStaticQuery(query)
  return (
    <Layout>
      <h1>Last Heavy AW18</h1>
      <p>
        I designed the *Last Heavy* fashion microsite for the Autumn/Winter 2018
        lookbook–Last Heavy's first season. It began as a personal project,
        combining my interests in fashion and internet art. As a model for the
        lookbook, I found myself extremely inspired by the carefully curated and
        meticulously detailed aesthetic that designer & art director, [Caesy
        Oney](http://caesyoney.com/), had cultivated. The [official
        website](https://lastheavy.com) for the Last Heavy fashion collection
        has many great design elements; the unique typeface and scrolling
        marquee text is an intriguing and novel element not often utilized in
        contemporary web design. Similarly, the urban/hip-hop inspired pieces
        are daringly juxtaposed against the rugged and rural wilderness
        environment, yet this contrast successfully highlights the bold design
        of the garments. As an inspired web developer, I took it upon myself to
        extend Caesy’s work beyond the limited sphere of SquareSpace by creating
        an interactive, engaging web experience that closely echoes the original
        vision but pushes far beyond the creative limits of the SquareSpace
        platform. I took particular care to optimize the experience for mobile
        devices and tablets which are capable of touch interaction. I also
        ensured cross-platform compatibility for laptop and desktop browsers
        while maximizing performance of the critical rendering path. With
        enhanced mobile compatibility, the user is invited to engage with the
        design and content through touch. This highly sensual, tactile interface
        simulates the experience of physical, in-store interaction, much like
        that of a fashion boutique. This critical experience for the consumer is
        typically impossible through traditional online shopping. However, here
        the consumer is able to closely identify and relate to the fashion
        objects they see on the screen. Touching is not only encouraged, but
        *required*, which helps to actualize the texture and feel of the
        garments themselves.
      </p>{' '}
      <p>
        Designed from the ground up with no CSS frameworks (e.g. Bootstrap).
        Powered entirely by pure JavaScript (with minimal jQuery) in order to be
        as lightweight as possible and enhance performance, especially on mobile
        devices. Both JS and CSS were minified and images were heavily
        compressed with no visible quality loss. This ultimately reduced the
        average rendering time from over 20s to as low as 300ms.
      </p>
      {data.images.nodes.map(node => (
        <img src={node.childImageSharp.gatsbyImageData.src} />
      ))}
    </Layout>
  );
}

export default LastHeavyModelingPage
