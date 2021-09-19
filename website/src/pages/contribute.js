import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"

const Contribute = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={data.markdownRemark.headings[0].value}
        description="How to contribute trails and content to the project"
      />
      <Breadcrumbs slugs={[{ link: "/contribute/", name: "Contribute" }]} />
      <article className="prose" itemScope itemType="http://schema.org/Article">
        <section
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  )
}

export default Contribute

export const pageQuery = graphql`
  query Contribute {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fileAbsolutePath: { glob: "**/CONTRIBUTING.md" }) {
      id
      excerpt(pruneLength: 160)
      html
      headings {
        value
      }
    }
  }
`
