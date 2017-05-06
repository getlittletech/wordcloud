const fetch = require('isomorphic-fetch')
const TextAnalyzer = require('./TextAnalyzer')

const endpoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const apiKey = 'c36a095b8b2848319124456c61b1bea9'

class NYTimes {

  static getWords(searchQuery, res) {
    console.log("search: ", searchQuery)
    const url = this.addParams(endpoint, searchQuery)
    fetch(url)
  	.then(response => {
  		if (response.status >= 400) {
  			res.json({error: "Error. Status is: " + response.status});
  		}
  		return response.json();
  	})
  	.then(responseJson => {
      if (responseJson && responseJson.response && responseJson.response.docs) {
          const articles = responseJson.response.docs

          const text = articles.reduce((acc, cur) => {
            return acc +
              (cur.snippet != null ? cur.snippet : "") +
              (cur.lead_paragraph != null ? cur.lead_paragraph : "") +
              (cur.abstract != null ? cur.abstract : "")
          }, "")

          const frequency = TextAnalyzer.getFrequency(text)

          res.json({frequency: frequency})
      } else {
        res.json({error: "No articles found"})
      }
  	}).catch(error => {
      console.log("error: ", error)
      res.json({
        error: "error: " + error
      })
    });
  }

  static addParams(endpoint, searchQuery) {
    let queryParam = '';

    if (searchQuery) {
      queryParam = '&' + encodeURIComponent('q') + '=' + searchQuery
    }

    const urlWithParams = endpoint + "?" +
      encodeURIComponent('api-key') + '=' + encodeURIComponent(apiKey) +
      queryParam

    return urlWithParams
  }
}

module.exports = NYTimes
