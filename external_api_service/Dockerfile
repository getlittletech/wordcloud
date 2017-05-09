# create a file named Dockerfile
FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN yarn global add pm2
RUN yarn install

COPY . /usr/src/app

EXPOSE 3000

CMD ["yarn", "dev"]
