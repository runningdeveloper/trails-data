import * as React from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MapChart from "../components/mapChart"
import Contributors from "../components/contributors"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const provinces = data.province.group

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Trails" />
      <p className="prose">
        Find some trails to run, walk, cycle and hike in South Africa. Select a
        province for a list of trails in the area. If you would like to
        contribute trails, go to the{" "}
        <Link to="/contribute/">contribution article</Link>.
      </p>

      <div className="prose">
        {provinces &&
          provinces.map(a => (
            <Link className="mr-2" key={a.fieldValue} to={`/${a.fieldValue}/`}>
              {a.fieldValue}
            </Link>
          ))}
      </div>
      <MapChart onProvinceSelect={slug => navigate(slug)} />

      <Contributors />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    province: allMarkdownRemark(
      sort: { fields: [fields___province], order: ASC }
    ) {
      group(field: fields___province) {
        fieldValue
      }
    }

    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/trails/**" } }
      sort: { fields: [frontmatter___trailName], order: ASC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }

        frontmatter {
          trailName
          date
          location
          routes
          link
        }
      }
    }
  }
`
