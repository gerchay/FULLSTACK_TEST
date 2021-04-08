FROM node:12-alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the frontend react app."
LABEL maintainer = ["gerardo15.chay97@gmail.com"]

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]