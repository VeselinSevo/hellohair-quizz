FROM node:16 as build
LABEL MAINTAINER Veselin Sevo <veselinsevo@gmail.com>
ARG PORT=8080
ENV PORT=$PORT

WORKDIR /usr/app
COPY package*.json /usr/app
RUN npm i --production=true
WORKDIR /usr/app/client
COPY package*.json /usr/app/client
RUN npm i --production=true

WORKDIR /usr/app
COPY . /usr/app

WORKDIR /usr/app/client
RUN npm run build

FROM node:16
WORKDIR /usr/app
# @todo: refactor this
COPY --from=build /usr/app/package.json /usr/app/package.json
COPY --from=build /usr/app/node_modules /usr/app/node_modules
# Copy api artifacts
COPY --from=build /usr/app/api /usr/app/api
# Copy frontend artifacts
COPY --from=build /usr/app/client/build /usr/app/client/build

ENTRYPOINT [ "npm", "run", "start" ]

EXPOSE ${PORT}