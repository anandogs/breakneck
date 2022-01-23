module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "breakneck",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-postcss",
  ],
};
