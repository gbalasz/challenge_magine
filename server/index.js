const dotenv = require('dotenv')
const express = require('express')
const middlewares = require('./middlewares')
const path = require('path')

dotenv.config()

const app = express()
const staticFiles = [
  'manifest.json',
  'robots.txt'
]

app.get('/', middlewares.htmlPage())
app.use('/graphql', middlewares.graphql())

staticFiles.forEach((file) => {
  app.get(`/${file}`, (req, res) => {
    res.sendFile(`static/${file}`, { root: __dirname })
  })
})

app.get('/style.min.css', (req, res) => {
  res.sendFile('dist/css/style.css', { root: path.join(__dirname, '../') })
})

if (require.main === module) {
  app.listen(process.env.APP_PORT, error => {
    if (error) return console.error(error)
    console.log(`Running ${process.env.APP_ENV} environment server on port ${process.env.APP_PORT}`)
  })
}
