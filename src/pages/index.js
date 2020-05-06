import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ListItem = props => {
  const { places } = props

  return places.map(place => (
    <div className="column" key={place.id}>
      <h2 className="is-size-2">
        <Link to={`${place.fields.slug}`}>{place.name}</Link>
      </h2>
      <p>Localização: {place.location}</p>
      <p>Tipo de lugar: {place.tags}</p>
    </div>
  ))
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllPlaces {
      allPlacesYaml {
        nodes {
          id
          tags
          name
          location
          fields {
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="columns">
        <ListItem places={data.allPlacesYaml.nodes} />
      </div>
    </Layout>
  )
}

export default IndexPage
