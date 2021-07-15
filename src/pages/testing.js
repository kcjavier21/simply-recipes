import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'

const Testing = (props) => {
    return (
        <Layout>
            <main className="page">
                <Gallery />
            </main>
        </Layout>
    )
}

export const data = graphql`
{
    site {
      info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`

export default Testing
