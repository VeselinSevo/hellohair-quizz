FROM node:16
LABEL MAINTAINER Veselin Sevo <veselinsevo@gmail.com>
ARG PORT
ENV PORT=$PORT

WORKDIR /usr/app

# Bundle app source
COPY . /usr/app

RUN npm i 

WORKDIR /usr/app/client

RUN npm i 
RUN npm run build

WORKDIR /usr/app

ENTRYPOINT [ "npm", "run", "start" ]

EXPOSE ${PORT}