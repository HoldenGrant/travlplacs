import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#333',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }} className='text-lg-left text-sm-center'>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header