export default{
  css: ['~/assets/css/app.css'],
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  head: {
    title: 'Lee Martin / Developer',
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
      }, {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css'
      }, {
        rel: 'stylesheet',
        href: 'https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?u8vidh'
      }, {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/qap7vjr.css'
      }, {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ],
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        property: 'og:site_name',
        content: 'Lee Martin'
      }, {
        property: 'og:image',
        content: 'https://www.leemartin.com/images/social.jpg'
      }, {
        property: 'og:title',
        content: 'Developer'
      }, {
        property: 'og:description',
        content: 'Lee Martin develops websites for rock n roll bands and gets paid in sex and drugs.'
      }, {
        property: 'og:url',
        content: 'https://www.leemartin.com'
      }, {
        property: 'og:type',
        content: 'website'
      }, {
        name: 'twitter:card',
        content: 'summary_large_image'
      }, {
        name: 'twitter:site',
        content: '@leemartin'
      }, {
        name: 'twitter:title',
        content: 'Lee Martin / Developer'
      }, {
        name: 'twitter:description',
        content: 'Lee Martin develops websites for rock n roll bands and gets paid in sex and drugs.'
      }, {
        name: 'twitter:image',
        content: 'https://www.leemartin.com/images/social.jpg'
      }, {
        name: 'twitter:url',
        content: 'https://www.leemartin.com'
      }
    ]
  },
  plugins: [
    '~/plugins/contentful'
  ]
}
