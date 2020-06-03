const path = require('path')

module.exports.onCreateNode = ({ node, actions, getNode }) => {
   const { createNodeField } = actions

   if (node.internal.type === 'Mdx') {
      const { relativePath } = getNode(node.parent)
      createNodeField({
         node,
         name: 'slug',
         value: `/docs/${relativePath.replace('.mdx', '')}`
      })
   }
}

module.exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions
   const res = await graphql(`
      query {
         allMdx {
            edges {
               node {
                  fields {
                     slug
                  }
               }
            }
         }
      }
   `)
   const docs = res.data.allMdx.edges
   docs.forEach(({ node }, index) => {
      createPage({
         path: node.fields.slug,
         component: path.resolve('./src/templates/docs/index.jsx'),
         context: {
            slug: node.fields.slug
         }
      })
   })
}
