// third party libs
const express = require('express')
const bodyParser = require('body-parser')

// our imports
const api = require('./api')

// setup express and init variables
const app = express()
app.use(bodyParser.json());

const port = process.env.PORT || 3000

// specify our api
app.use('/api', api)

// handle other requests
app.use(handleRequest)

function handleRequest(req, res) {
  res.send("Hello, word cloud!")
}

app.listen(port)
