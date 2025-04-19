FROM node:18-alpine as client

RUN mkdir -p /app

WORKDIR /app

COPY package.json package-json.lock ./

RUN CI=true 

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]