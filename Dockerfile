FROM node:16.13.1-alpine3.14
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./dist ./dist
COPY ./images ./images

RUN groupadd non-root-app-group
RUN useradd non-root-app-user --group non-root-app-group
RUN chown -R non-root-app-user:non-root-app-group /usr/src/app
RUN chmod 777 /usr/src/app
USER non-root-app

# Installs all packages
RUN npm install

EXPOSE 8080
# Runs the dev npm script to build & start the server
CMD npm run dev