FROM node:16
RUN userdel -r node
RUN addgroup -S node -g 999
RUN adduser -S -G node -u 999 node

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./images ./images
RUN npm install

EXPOSE 8080
CMD npm run dev
USER node