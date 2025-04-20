FROM node:18-alpine as server

RUN mkdir -p /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN npx prisma generate

EXPOSE 3000

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]