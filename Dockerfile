FROM node:16.13.1-alpine3.14
RUN useradd -ms /bin/bash admin
WORKDIR /usr/src/app
RUN chown -R admin:admin /app
RUN chmod 755 /app
USER admin
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./dist ./dist
COPY ./images ./images

RUN npm install
EXPOSE 8080
CMD npm run start-server