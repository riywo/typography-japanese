module.exports = {
  pathPrefix: "/typography-japanese",
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/README.md`,
        name: 'readme',
      },
    },
    'gatsby-transformer-remark',
  ],
}
