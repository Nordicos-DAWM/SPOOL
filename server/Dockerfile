FROM node:14-alpine

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 8000

ENTRYPOINT ["npm","run","dev"]