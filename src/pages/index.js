import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
      <h1 className="is-size-1">Hi people</h1>
      <div className="columns">
        <ListItem places={data.allPlacesYaml.nodes} />
      </div>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
