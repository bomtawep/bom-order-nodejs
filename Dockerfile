FROM postgres:12 
RUN mkdir temp
RUN groupadd non-root-postgres-group
RUN useradd non-root-postgres-user --group non-root-postgres-group
RUN chown -R non-root-postgres-user:non-root-postgres-group /temp
RUN chmod 777 /temp
RUN chmod 777 /venv/bin
RUN chmod 777 /var/lib/postgresql/data
USER non-root-postgres

# Installs Node.js image
FROM node:16.13.1-alpine3.14

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /usr/src/app

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

# Copies everything in the src directory to WORKDIR/src
COPY ./src ./src
COPY ./dist ./dist
COPY ./images ./images

# Installs all packages
RUN npm install

EXPOSE 8080
# Runs the dev npm script to build & start the server
CMD npm run start-server