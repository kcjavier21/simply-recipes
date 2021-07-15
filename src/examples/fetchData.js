import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
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

const FetchData = () => {
  const data = useStaticQuery(getData);
  return <div>
    <h2>{data.site.info.person.name}</h2>
    <div>
      {data.site.info.complexData.map((item, index) => {
        return <p key={index}>{item.name}:{item.age}</p>
      })}
    </div>
  </div>
}

export default FetchData
