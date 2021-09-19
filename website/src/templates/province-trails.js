import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"
import ActivityList from "../components/activityList"

const ProvinceTrailsTemplate = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={posts[0].fields.province}
        description={`Trails in ${posts[0].fields.province}`}
      />

      <Breadcrumbs
        slugs={[
          {
            link: `/${posts[0].fields.province}/`,
            name: posts[0].fields.province,
          },
        ]}
      />

      <header>
        <h1 className="text-4xl font-bold mt-8 mb-4" itemProp="headline">
          {posts[0].fields.province} trails
        </h1>
      </header>

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.trailName || ""

          return (
            <li key={post.fields.slug}>
              <article itemScope itemType="http://schema.org/Article">
                <header>
                  <h2 className="text-3xl font-bold mt-8 mb-4">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <ActivityList activities={post.frontmatter.activity} />
                </header>
                <section>
                  <p
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProvinceTrailsTemplate

export const pageQuery = graphql`
  query ProvinceTrailsBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { fields: { province: { eq: $id } } }
      sort: { fields: [frontmatter___trailName], order: ASC }
    ) {
      nodes {
        excerpt
        fields {
          slug
          province
        }
        frontmatter {
          trailName
          date
          activity
          location
          routes
          link
        }
      }
    }
  }
`
