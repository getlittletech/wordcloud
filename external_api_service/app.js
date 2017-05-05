var path = require('path')
var Express = require('express')

const app = Express()
const port = 3000

app.use(handleRender)

function handleRender(req, res) {
  res.send("Hello word cloud")
}

app.listen(port)
