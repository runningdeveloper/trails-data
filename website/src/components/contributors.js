import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Contributors = ({ description, lang, meta, title }) => {
  const { allContributor } = useStaticQuery(
    graphql`
      query {
        allContributor {
          edges {
            node {
              avatar {
                childImageSharp {
                  gatsbyImageData(width: 60)
                }
              }
              id
              login
              name
              profile
            }
          }
        }
      }
    `
  )

  const contributors = allContributor.edges.map(({ node }) => node)

  return (
    <>
      <h2 className="text-3xl font-bold mt-8 mb-6">Contributors</h2>
      <div className="flex mb-4">
        {contributors.map(node => (
          <a
            className="mr-2"
            key={node.id}
            href={node.profile}
            target="_blank"
            rel="noreferrer"
          >
            <GatsbyImage
              imgClassName="rounded-full"
              image={getImage(node.avatar)}
              alt={node.name}
            />
          </a>
        ))}
      </div>
      <p className="prose">
        Contribute see details <Link to="/contribute/">here</Link>
      </p>
    </>
  )
}

export default Contributors
