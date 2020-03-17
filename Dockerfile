# FROM nginx as production-stage
FROM nginx:1.17.9
RUN mkdir /app
COPY ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf

RUN chgrp -R 0 /app
RUN chmod -R g+rwX /app