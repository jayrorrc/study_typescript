FROM node:latest

COPY . /opt/web

WORKDIR /opt/web
RUN npm install
# RUN npm run compile

EXPOSE 8080
CMD npm start