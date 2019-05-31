# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY ./dist /usr/share/nginx/html

FROM node as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
RUN npm install @angular/cli -g
COPY . .
RUN ng build --prod=true

FROM nginx:latest
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html