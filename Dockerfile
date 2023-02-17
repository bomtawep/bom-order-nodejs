FROM node:16.13.1-alpine3.14

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./dist ./dist
COPY ./images ./images
RUN npm install

RUN npm install telnet-client

EXPOSE 8080
USER root
CMD npm run dev