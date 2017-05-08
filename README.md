Word Cloud demo project

1. Setup

The project is setup to be run on a Docker platform.
There are two Node.js microservices - one dealing with third party API, the other - with displaying of the word cloud(s)
There is also an Nginx microservise that passes the requests to the appropriate microservise allowing a seamless integration between them.

I have chosen to store the whole project in a single git repo since they are quite related and written in the same language. There are both advantages and disadvantages of this approach.

For the development flow one should use a docker-compose, that will load the src via volumes. So to start developing/testing the application, one should:

- install Docker
- install Yarn
- checkout the repo (https://github.com/getlittletech/wordcloud)
- run the following commands (could be improved..):
cd ./external_api_service/
yarn install
cd ../
cd ../wordcloud_service/
yarn install
cd ..
docker-compose up

- i.e. one should run "docker-compose up" from the root directory of the project after installing the dependencies with yarn in both subprojects

2. What is left

Since my time for the project was limited, there are a few thins left that I did not have time to do.
Here I will describe some of the aspects that are left off:

- setup Continous Integration/Continous delivery

  For a real development I would like to setup Continous Integration with e.g. Jenkins in a way, that on each commit the code is built, tested and deployed to the testing environment. Furthermore one could set it up to easily deploy to the further environments, such as staging or production

  - setup automatic tests

  I would setup automatic testing with Jest or another testing library. Planned to do it for the project, but didn't have enough time

- validate input, sanitize output
  Now the user is able to select the source.

- cleanup API response (leave only strings)
- handle errors - e.g. if api service could not fetch words from external API, etc
- other languages?
- Server side rendering
- https in prod for secure connections
- use immutable lib
- use pm2 for clustering
- better user feedback: spinner, error messages
- lint
- react hot loader
- add helmet
