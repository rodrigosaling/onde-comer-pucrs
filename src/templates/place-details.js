import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const place = data.placesYaml
  return (
    <Layout>
      <div>
        <h1>{place.name}</h1>
        <div>{place.location}</div>
        <ul>
          {place.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    placesYaml(fields: { slug: { eq: $slug } }) {
      tags
      name
      location
      fields {
        slug
      }
    }
  }
`
