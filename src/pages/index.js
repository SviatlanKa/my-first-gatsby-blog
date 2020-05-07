import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Sviatlana's blog</h1>
      <h3>Total count {data.allMarkdownRemark.totalCount}</h3>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link className="blog-link" to={node.fields.slug}>
              <h4 className="title">
                {node.frontmatter.title} - {node.frontmatter.date}
              </h4>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            date
            description
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
