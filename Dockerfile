FROM node:latest

COPY . /opt/web

WORKDIR /opt/web
RUN npm install
RUN npm run compile

EXPOSE 3000
CMD npm start