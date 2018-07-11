import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div>
    <h1>Blog Post</h1>
    <p>Welcome to your new Gatsby site.</p>
    {data.allMarkdownRemark.edges.map( post => 
        <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br/>
            <br/>
            <Link to={post.node.frontmatter.path}>Read more</Link>
            <br/>
            <br/>
        </div>
    )}
    {/* <p>Now go build something great.</p>
    <Link to="/about/">Go to page 2</Link><br/>
    <Link to="/service/">Go to page 3</Link>
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <Link 
        key={post.node.id} 
        to={post.node.frontmatter.path}
        >
        {post.node.frontmatter.title}
        </Link>
    ))} */}
  </div>
)

export const postQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(limit:10){
            edges{
                node{
                  id
                    frontmatter{
                        title
                        path
                        date
                        author
                    }
                }
            }
        }
    }
`

export default BlogPage
