import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

interface HeaderLogoProps {
  logo: {
    childImageSharp: Queries.ImageSharp
  }
  title: string
}

const HeaderLogo = ({ logo, title }: HeaderLogoProps) => {
  return (
    <div className='center center-el-x site-head-center'>
      <div className='site-head-logo'>
        <GatsbyImage
          image={logo.childImageSharp.gatsbyImageData}
          className='site-head-logo-image'
          alt='jh logo'
          imgStyle={{
            overflow: 'visible',
            display: 'grid',
            gridTemplateColumns: '1fr'
          }}
        />
        <div className='site-head-title'>
          <Link to={'/'}>{title}</Link>
        </div>
      </div>
    </div>
  )
}

HeaderLogo.propTypes = {
  logo: PropTypes.object,
  title: PropTypes.string
}

export default HeaderLogo
