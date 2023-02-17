FROM node:16.13.1-alpine3.14

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./dist ./dist
COPY ./images ./images
RUN npm install
RUN deluser --remove-home node \
  && addgroup -S node -g 999 \
  && adduser -S -G node -u 999 node
USER node
EXPOSE 8080
CMD npm run dev