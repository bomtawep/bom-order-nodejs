FROM node:16

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./images ./images
COPY ./dist ./dist
RUN npm install

EXPOSE 8080
CMD npm run start-server