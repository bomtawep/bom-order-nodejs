FROM node:12-buster-slim

WORKDIR /src
COPY package.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]