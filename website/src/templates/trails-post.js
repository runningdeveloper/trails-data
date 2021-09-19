import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"
import ActivityList from "../components/activityList"

const TrailsPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.trailName}
        description={post.frontmatter.description || post.excerpt}
      />
      <Breadcrumbs
        slugs={[
          { link: `/${post.fields.province}/`, name: post.fields.province },
          { link: post.fields.slug, name: post.frontmatter.trailName },
        ]}
      />
      <article className="prose" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.trailName}</h1>
          <ActivityList activities={post.frontmatter.activity} />
          <span>
            <a href={post.frontmatter.link} target="_blank" rel="noreferrer">
              Website
            </a>
          </span>{" "}
          <span>
            <a
              href={post.frontmatter.location}
              target="_blank"
              rel="noreferrer"
            >
              Location
            </a>
          </span>
          <p>{post.frontmatter.cost}</p>
          <p>Updated: {post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default TrailsPostTemplate

export const pageQuery = graphql`
  query TrailsPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        province
      }
      frontmatter {
        trailName
        date
        location
        routes
        link
        activity
        cost
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
