FROM node:18-alpine as server

RUN mkdir -p /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]