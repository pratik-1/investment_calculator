FROM node:18.17.1-alpine3.18

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

COPY package.json .

RUN npm install --silent

COPY src src

COPY public public

EXPOSE 3000