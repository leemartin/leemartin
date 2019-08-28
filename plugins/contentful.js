const contentful = require('contentful')

export default ({ app }, inject) => {
  const config = {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  }

  app.contentful = contentful.createClient(config)
}
