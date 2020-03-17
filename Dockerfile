# FROM nginx as production-stage
FROM nginx 
WORKDIR /app
COPY ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf

RUN chgrp -R 0 /app
RUN chmod -R g+rwX /app

CMD ["nginx", "-g", "daemon off;"]
