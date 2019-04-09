module.exports = (pageParams) => `<!DOCTYPE html>
<html lang="en" class="app">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1.0">
  <meta name="apple-mobile-web-app-title" content="gbalasz">
  <meta name="description" content="${pageParams.pageTitle}">
  <meta name="theme-color" content="#f43059">

  <title>${pageParams.pageTitle} | V${pageParams.npmPackageVersion}</title>

  <link rel="preconnect dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="canonical" href="http://localhost:${pageParams.appPort}/">
  <link rel="manifest" href="/manifest.json">
  <link rel="shortcut icon" href="https://www.maginepro.com/wp-content/uploads/2018/01/cropped-favicon_maginepro_512x512-192x192.png">
  <link rel="apple-touch-icon-precomposed" href="https://www.maginepro.com/wp-content/uploads/2018/01/cropped-favicon_maginepro_512x512-192x192.png">
  <link href="https://fonts.googleapis.com/css?family=${pageParams.fontName}" rel="stylesheet">
  <link rel="stylesheet" id="challenge-css" href="/style.css?ver=${pageParams.npmPackageVersion}" type="text/css" media="all">
</head>
<body>
  <main id="App">
    Loading application version ${pageParams.npmPackageVersion}
  </main>
  <script src="/app.js?ver=${pageParams.npmPackageVersion}"></script>
</body>
</html>`
