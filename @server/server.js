const express = require('express')
const next = require('next')
const spdy = require('spdy')
const fs = require('fs')
const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// const devProxy = {
//   '/api': {
//     target: 'https://crossian.com',
//     pathRewrite: { '^/api': '/' },
//     changeOrigin: true
//   }
// }

// const addProxy = (server, proxy) => {
//   if (server && proxy) {
//     const { createProxyMiddleware } = require('http-proxy-middleware')
//     Object.entries(proxy).map(([api, settings]) => {
//       server.use(api, createProxyMiddleware(settings))
//     })
//   }
// }

const options = {
  key: fs.readFileSync(path.join(__dirname, '/onselless.dev.key')),
  cert: fs.readFileSync(path.join(__dirname, '/onselless.dev.crt'))
}

app.prepare().then(() => {
  const server = express()

  // addProxy(server, devProxy)

  server.get('/healthz', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send('OK')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || 3000
  // server.listen(port, (err) => {
  //   if (err) throw err
  //   console.log(`> Ready on http://localhost:${port}`)
  // })
  spdy.createServer(options, server).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
    console.log(`=>>> You can click http://onselless.dev:${port}`)
  })
})
