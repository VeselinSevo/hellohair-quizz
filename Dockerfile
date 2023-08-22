FROM node:16
LABEL MAINTAINER Veselin Sevo <veselinsevo@gmail.com>
ARG PORT=8080
ENV PORT=$PORT

WORKDIR /usr/app
COPY package*.json /usr/app
RUN npm i
WORKDIR /usr/app/client
COPY client/package*.json /usr/app/client
COPY client/public /usr/app/client/public
RUN npm i
RUN npm run build

WORKDIR /usr/app
COPY . /usr/app

WORKDIR /usr/app
ENTRYPOINT [ "npm", "run", "start" ]
EXPOSE ${PORT}