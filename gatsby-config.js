module.exports = {
  siteMetadata: {
    title: `Sutra.hr`,
    author: {
      name: `Sutra.hr`,
      summary: `Kreativna agencija za marketing, web dizajn, branding`,
    },
    description: `Kreativna agencija za marketing, web dizajn, branding.`,
    siteUrl: "http://www.sutra.hr",
    image: "/photo1.jpeg",
    keywords:
      "web design, video, videography, branding, marketing, web dizajn, plan, video, photography, zadar, reklama, izrada web stranica, instagram, facebook, socijalne mreže",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `http://www.sutra.hr`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sutra.hr`,
        short_name: `Sutra.hr`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/domicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-59WWPYFW8B", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://www.sutra.hr",
        sitemap: "http://www.sutra.hr/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     serialize: () => {
    //       let pages = [
    //         {
    //           url: "http://www.sutra.hr/",
    //           changefreq: `daily`,
    //           priority: 0.7,
    //         },
    //       ];

    //       return pages;
    //     },
    //   },
    // },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
  ],
};
