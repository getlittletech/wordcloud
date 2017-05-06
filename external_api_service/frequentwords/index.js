const express = require('express');
const router = express.Router();

const NYTimes = require('./NYTimes')

router.get('/', function(req, res) {
  const source = req.query.source
  const searchQuery = req.query.searchQuery

  console.log("source: ", source)
  console.log("searchQuery: ", searchQuery)

  if (source == 'nytimes') {
      NYTimes.getWords(searchQuery, res)
  } else {
    res.json({error: 'unsopported source', source: 'source'})
  }
});

module.exports = router;
