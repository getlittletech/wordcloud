const fetch = require('isomorphic-fetch')

const endpoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const apiKey = 'c36a095b8b2848319124456c61b1bea9'

class NYTimes {

  getArticles(searchQuery, res) {
    console.log("search: ", searchQuery)
    const url = this.addParams(endpoint, searchQuery)
    fetch(url)
  	.then(response => {
  		if (response.status >= 400) {
  			res.json({error: "Error. Status is: " + response.status});
  		}
  		return response.json();
  	})
  	.then(articles => {
  		console.log(articles);
      res.json({
        articles
      })
  	}).catch(error => {
      console.log("error: ", err)
      res.json({
        error
      })
    });
  }

  addParams(endpoint, searchQuery) {
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
