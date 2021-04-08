FROM node:12-alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the Backend express"
LABEL maintainer = ["gerardo15.chay97@gmail.com"]

WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]