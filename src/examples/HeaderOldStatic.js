import React from "react"
import { StaticQuery, graphql } from "gatsby"

// const getData = graphql``

const ComponentName = () => (
    <StaticQuery
        query={graphql`
      {
        site {
          info: siteMetadata {
            author
            data
            description
            person {
              name
              age
            }
            title
          }
        }
      }
    `}
        render={data => <h3>{data.site.info.description}</h3>}
    // render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
    ></StaticQuery>
)

export default ComponentName
