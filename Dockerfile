FROM node:12
WORKDIR /usr/app
COPY package*.json ./
RUN npm install

COPY . .
COPY .env .

EXPOSE 4500
CMD [ "npm", "start" ]
