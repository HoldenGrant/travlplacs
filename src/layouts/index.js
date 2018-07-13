import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './bootstrap.min.css'
import './index.css'

import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer';

//import '../index.scss'
const bootstrap = <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" ></script> 
const Layout = ({ children, data }) => (
<div>  
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
    ]}
  />

  {/* site header */}
  <Header siteTitle={data.site.siteMetadata.title} />
  
  {/* site menu */}
  <Nav />
  
  {/* <Menu /> */}
  <div className='container'>
    <div className='row'>
      {/* page content display here */}
      {children()}
    </div>
  </div>
  <Footer siteTitle={data.site.siteMetadata.title}/>
</div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
