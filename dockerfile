FROM node:20-alpine

RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .

RUN npm install

EXPOSE 3000
CMD [ "node", "app.js" ]