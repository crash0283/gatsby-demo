
//1. Create a "slug" (ex. /post) 
//2. Create a page based on the data we get back from graphql

//This function handles finding the parent file node aling with creating the slug
const { createFilePath } = require("gatsby-source-filesystem")

/*
    Using onCreateNode to create the path or "slug" to our page
    This onCreate function will be called by Gatsby whenever a new node is created (or updated)
    To see changes, you must stop and restart server
*/
exports.onCreateNode = ({node,getNode,actions}) => {
    const { createNodeField } = actions
    if(node.internal.type === "MarkdownRemark") {
        // console.log(createFilePath({node,getNode,basePath: "data"}))
        const slug = createFilePath({node,getNode,basePath: "data"})
        /*
            Now you can add your new slugs directly onto the MarkdownRemark nodes.
            This is powerful, as any data you add to nodes is avaliable to query later with GraphQL
            This function allows you to create additional fields on nodes created by other plugins
        */
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}


//2. Creating Pages
const path = require("path")
//**Note: ** The graphql function call returns a Promise
//see : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//for more info on Promises
exports.createPages = async ({graphql,actions}) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark {
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

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve("./src/templates/post.js"),
            context: {
                slug: node.fields.slug
            }
        })
    })

    // console.log(JSON.stringify(result))
}

