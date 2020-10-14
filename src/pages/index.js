import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            data(formatString: "MMMM Do, YYYY")
            title
          }
          html
        }
      }
    }
  }
`)
  return  (
  <Layout>
    <SEO title="Home" />
    {
      data.allMarkdownRemark.edges.map(({node}) => {
        return (
          <div>
            <h1>{node.frontmatter.title}</h1>
            <h4>{node.frontmatter.data}</h4>
            <div dangerouslySetInnerHTML={{__html: node.html}}></div>
            <hr style={{height: "3px"}} />
          </div>
        )
      })
    }
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
  )
}

export default IndexPage
