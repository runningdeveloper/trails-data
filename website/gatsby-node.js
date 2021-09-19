const path = require(`path`)
const fs = require("fs-extra")
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const trailPost = path.resolve(`./src/templates/trails-post.js`)
  const provincePosts = path.resolve(`./src/templates/province-trails.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/trails/**" } }
          sort: { fields: [frontmatter___trailName], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
              province
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your trail posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: trailPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  const provincesResult = await graphql(`
    {
      allMarkdownRemark {
        group(field: fields___province) {
          fieldValue
        }
      }
    }
  `)

  if (provincesResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your province posts`,
      result.errors
    )
    return
  }

  const provinces = provincesResult.data.allMarkdownRemark.group

  provinces.forEach(prov => {
    createPage({
      path: prov.fieldValue,
      component: provincePosts,
      context: {
        id: prov.fieldValue,
      },
    })
  })
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  store,
  cache,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions
  // trying to get the all-contributorsrc into graphql
  // basically from https://github.com/rmcfadzean/gatsby-pantry/blob/master/packages/gatsby-source-all-contributors/src/gatsby-node.js

  const contributorsRcData = await fs.readFile(
    `../.all-contributorsrc`,
    "utf-8"
  )

  const { contributors } = JSON.parse(contributorsRcData)

  await Promise.all(
    contributors.map(async contributor => {
      const id = createNodeId(`contributors__${contributor.login}`)
      let fileNode
      try {
        fileNode = await createRemoteFileNode({
          url: contributor.avatar_url,
          parentNodeId: id,
          store,
          cache,
          ext: ".jpg",
          createNode,
          createNodeId,
          reporter,
        })
      } catch (e) {
        reporter.panic(e)
      }

      if (fileNode) {
        contributor.avatar___NODE = fileNode.id
      }

      const nodeContent = JSON.stringify(contributor)

      const nodeMeta = {
        id,
        internal: {
          type: `Contributor`,
          content: nodeContent,
          contentDigest: createContentDigest(contributor),
        },
      }

      const node = { ...contributor, ...nodeMeta }

      createNode(node)
    })
  )
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const province = value.split("/")[1] // brittle perhaps blank if doesn't exist

    if (province) {
      createNodeField({
        name: `slug`,
        node,
        value,
      })

      createNodeField({
        name: `province`,
        node,
        value: province,
      })
    }
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
