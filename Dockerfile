FROM orangelabschina/nginx-unprivileged:latest 
#FROM centos/nginx-112-centos7

WORKDIR /app
COPY ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
