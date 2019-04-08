module.exports = exports = () => (req, res) => {
  const htmlPage = require('../templates/page.html')

  res.send(htmlPage({
    appPort: process.env.APP_PORT,
    npmPackageVersion: process.env.npm_package_version,
    fontName: 'Montserrat',
    pageTitle: 'Gabi Balasz - Challenge for Magine'
  }))
}
