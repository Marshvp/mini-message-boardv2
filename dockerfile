FROM node:23-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

CMD [ "npm", "start" ]