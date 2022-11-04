FROM node:16

WORKDIR /src
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8080

CMD ["node", "index.js"]