import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const place = data.placesYaml
  return (
    <Layout>
      <div>
        123132
        <h1>{place.name}</h1>
        <div>{place.location}</div>
        asfasfdasdf
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    placesYaml(fields: {slug: {eq: $slug}}) {
      tags
      name
      location
      fields {
        slug
      }
    } 
  }
`
