FROM node:16.13.1-alpine3.14
WORKDIR /usr/src/app
RUN mkdir postgres
RUN groupadd non-root-postgres-group
RUN useradd non-root-postgres-user --group non-root-postgres-group
RUN chown -R non-root-postgres-user:non-root-postgres-group /usr/src/app
RUN chmod 777 /usr/src/app
USER non-root-postgres
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./dist ./dist
COPY ./images ./images

RUN npm install

EXPOSE 8080

CMD npm run dev