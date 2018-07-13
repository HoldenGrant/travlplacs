import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <pageContent>
    <h1 className='text-center'>Hi people</h1>
    <p >Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link className='btn btn-danger' to="/about/">Go to page 2</Link><br/>
    <Link to="/service/">Go to page 3</Link>
    <h2>Index</h2>
    {/* {data.allMarkdownRemark.edges.map(post => (
      <Link 
        key={post.node.id} 
        to={post.node.frontmatter.path}
        >
        {post.node.frontmatter.title}
        </Link>
    ))} */}
  </pageContent>
)

// export const postQuery = graphql`
//     query IndexQuery {
//         allMarkdownRemark(limit:10){
//             edges{
//                 node{
//                   id
//                     frontmatter{
//                         title
//                         path
//                     }
//                 }
//             }
//         }
//     }
// `

export default IndexPage
