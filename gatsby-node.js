const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const readmePath = path.resolve('README.md')
  createPage({
    path: '/',
    component: path.resolve('src/templates/readme.js'),
    context: {
      fileAbsolutePath: readmePath,
    },
  })
}