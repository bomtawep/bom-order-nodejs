FROM node:16.13.1-alpine3.14
WORKDIR /usr/src/app
USER root 
RUN chmod 777 /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./dist ./dist
COPY ./images ./images

RUN npm install

EXPOSE 8080

CMD npm run dev