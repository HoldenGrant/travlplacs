import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className='container'>
        <div className='row pt-2 pb-2'>
            <Link
            to="/"
            style={{
                color: 'white',
                textDecoration: 'none',
            }}
            >
            {siteTitle}
            </Link> &nbsp; &copy; 2018
        </div>
    </div>
  </footer>
)

export default Footer