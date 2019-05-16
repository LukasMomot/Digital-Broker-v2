# FROM node:alpine as builder
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# RUN npm install @angular/cli -g
# RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html
