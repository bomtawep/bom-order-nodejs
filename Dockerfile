FROM node:16
RUN userdel -r node
RUN groupmod -g 999 node && usermod -u 999 -g 999 node
WORKDIR /usr/src/app
RUN usermod -d /usr/src/app -l root-node node
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY ./images ./images
RUN npm install

EXPOSE 8080
CMD npm run dev
USER root-node