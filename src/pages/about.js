import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hi from the about page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link><br/>
    <Link to="/about/">To page 2</Link><br/>
    <Link to="/service/">To page 3</Link>
  </div>
)

export default SecondPage
