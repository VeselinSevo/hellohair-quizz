FROM node:16 as build
LABEL MAINTAINER Veselin Sevo <veselinsevo@gmail.com>
ARG PORT=8080
ENV PORT=$PORT

WORKDIR /usr/app
COPY package*.json /usr/app
RUN npm i
WORKDIR /usr/app/client
COPY package*.json /usr/app/client
RUN npm i

WORKDIR /usr/app
COPY . /usr/app

WORKDIR /usr/app/client
RUN npm run build

WORKDIR /usr/app
ENTRYPOINT [ "npm", "run", "start" ]
EXPOSE ${PORT}