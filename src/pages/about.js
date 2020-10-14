import React from "react"
import Layout from "../components/layout"

import { useStaticQuery, graphql } from "gatsby"

const About = () => {
    const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            birthTime(fromNow: true)
            extension
            prettySize
            relativePath
          }
        }
      }
    }
  `)
    return (
        <Layout>
            <div>
                <h1>About My Site</h1>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.allFile.edges.map(({node}, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{node.relativePath}</td>
                                        <td>{node.prettySize}</td>
                                        <td>{node.extension}</td>
                                        <td>{node.birthTime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default About