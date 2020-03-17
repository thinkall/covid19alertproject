FROM orangelabschina/nginx-unprivileged:latest

#FROM nginx

WORKDIR /app
COPY ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
