import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"
import ActivityList from "../components/activityList"
import { FaDollarSign, FaRoute } from "react-icons/fa"

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
          <div className="my-2">
            {!post.frontmatter.free && (
              <span className="flex content-center">
                <FaDollarSign
                  className="text-xl fill-current text-red-700 mr-1"
                  title="Not Free"
                />
                Not free
              </span>
            )}
          </div>
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
          </span>{" "}
          {post.frontmatter.routes && <div className="flex my-4"><span className="mr-2">Routes: </span>{post.frontmatter.routes.map((a, i) => <div className="!list-none" key={a}>
            <a
              href={a}
              target="_blank"
              rel="noreferrer"
              title={`Route ${i}`}
            >
              <FaRoute
                className="text-xl fill-current text-blue-700 mr-2 hover:text-blue-400"
                title={`Route ${i}`}
              />
            </a></div>)}
          </div>
          }
          <p>Updated: {post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {post.frontmatter.otherLinks && <h3>Other links about this trail</h3>}
        {post.frontmatter.otherLinks && <ul>{post.frontmatter.otherLinks.map(a => <li key={a}><a
          href={a}
          target="_blank"
          rel="noreferrer"
        >
          {a}
        </a></li>)}
        </ul>
        }
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
        date(formatString: "D MMMM YYYY")
        location
        routes
        link
        activity
        free
        otherLinks
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
