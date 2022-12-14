# Installs Node.js image
FROM node:16.13.1-alpine3.14

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
USER node
# Copies everything in the src directory to WORKDIR/src
#COPY ./src ./src

# Installs all packages
RUN npm install
COPY --chown=node:node . .
EXPOSE 8080 

# Runs the dev npm script to build & start the server
CMD npm run dev