var path = require('path')
var express = require('express')

var fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

//Serve static files
app.use('/static', express.static('static'));

app.use(handleRender)

function handleRender(req, res) {
  res.send(renderFullPage("", 0))
}

function renderFullPage(html, preloadedState) {
  return `
    <html>
      <head>
        <title>Word cloud service</title>
        <style>
          body {
              background-color:#F39C12;
              height: 100%;
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
