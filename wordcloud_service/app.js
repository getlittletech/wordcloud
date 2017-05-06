var path = require('path')
var express = require('express')

var fs = require('fs')

const app = express()
const port = process.env.PORT || 5000

//Serve static files
app.use('/static', express.static('static'));

app.use(handleRender)

function handleRender(req, res) {
  console.log("hej again!")
  res.send(renderFullPage("", 0))
}

function renderFullPage(html, preloadedState) {
  return `
    <html>
      <head>
        <title>Word cloud service</title>
      </head>
      <body>
        <p>Word cloud service!</p>
        <div id="root"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
