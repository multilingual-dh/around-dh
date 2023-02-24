module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Around DH',
  siteDescription:
    'Eleventy starter based on the workflow suggested by buildexcellentwebsit.es.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Multilingual DH group', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Around DH',
    description:
      "Celebrating DH praxis from across the globe by highlighting the networks of people and sources behind these projects, the tools used, and what's at stake."
  },
  pagination: {
    itemsPerPage: 20
  },
  menu: {
    closedText: 'Menu'
  }
};
