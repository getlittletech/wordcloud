Word Cloud demo project

A quick playground for trying out things with React/Redux and show it to the world.

The application loads an array of words from the selected source and displays it in a word cloud.

1. Setup

The project is setup to be run on a Docker platform.
There are two Node.js microservices - one dealing with third party API, the other - with displaying of the word cloud(s)
There is also an Nginx microservise that passes the requests to the appropriate microservise allowing a seamless integration between them.

I have chosen to store the whole project in a single git repo since they are quite related and written in the same language. There are both advantages and disadvantages of this approach.

For the development flow one should use a docker-compose, that will load the src via volumes. So to start developing/testing the application, one should:

- install Docker
- install Yarn
- checkout the repo (https://github.com/getlittletech/wordcloud)
- run the following command from the root directory of the project (it may take a while the first time):
  docker-compose up

- start your browser and navigate to "localhost"

2. Left TODO:

Since my time for the project was limited, there are a few things left that I did not have time to do.
Here I will describe some of the aspects that are left off:

- setup Continous Integration/Continous delivery

  For a real development I would like to setup Continous Integration with e.g. Jenkins in a way, that on each commit the code is built, tested and deployed to the testing environment. Furthermore one could set it up to easily deploy to the further environments, such as staging or production

- add and publish Docker files

  One should create and publish the Dockerfiles to enable production deployment

- deployment to production

  Decide on the hosting & orchestration. Since we have used Docker, the closest choices for managing the microservices, deployment and updates are Docker swarm or Kubernetes. One could host on a number of cloud platforms (AWS, Google container engine, perhaps Heroku). Alternatively one could host it on a Data Center too.

- setup automatic tests

  I would setup automatic testing with Jest or another testing library.

- validate input, sanitize output
  Now the user is able to select the source. One could also provide an input field to specify the search query. User input coming into the app should be validated before using. Now we just pass it to the third party api, so it is not crucial. But still should be done. E.g. with https://www.npmjs.com/package/validator.
  We should also sanitize the output we are getting from the third party APIs before adding it to our html. E.g. https://github.com/yahoo/xss-filters.

- cleanup API response (leave only strings)

  Now there might be some characters left in the responses from the external APIs

- handle errors - e.g. if api service could not fetch words from external API, etc

  now we have just a basic message on the screen. We could make it nicer

- better styling

  I have chosen to use CSS Modules and Radium for this project to try out both. One could of course add more styling/css to make our output look nicer.

- other languages?

  Perhaps we want to support other languages than english? This is not handled/tested properly at the moment.

- Server side rendering

  We could add more server side rendering. That's why I have chosen to use Node for the presentation microservice instead of serving static files. However didn't have enough time to add it.

- https in prod for secure connections

- use immutable lib

- use pm2 for clustering

- better user feedback: spinner, error messages

- lintint the code

- react hot loader

- add helmet for additional security
