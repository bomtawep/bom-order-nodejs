FROM node:16.13.1-alpine3.14
WORKDIR /usr/src/app
RUN groupadd non-root-node-group
RUN useradd non-root-node-user --group non-root-node-group
RUN chown -R non-root-node-user:non-root-node-group /usr/src/app
RUN chmod 777 /usr/src/app
USER non-root-node
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./dist ./dist
COPY ./images ./images

RUN npm install

EXPOSE 8080

CMD npm run dev