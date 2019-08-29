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
      }
    ]
  },
  plugins: [
    '~/plugins/contentful'
  ]
}
