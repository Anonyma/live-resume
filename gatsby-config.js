require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/test-gatsby-resume",
  siteMetadata: {
    siteTitle: `Live resume (@Anonyma_z)`,
    siteTitleAlt: `Live resume (@Anonyma_z)`,
    siteUrl: `https://anonyma.github.io/test-gatsby-resume`,
    siteDescription: `Live resume for @Anonyma / @Anonyma_z`,
    siteImage: `pixel_portrait.png`,
    author: `@Anonyma_z`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icon: `src/images/pixel_portrait.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
