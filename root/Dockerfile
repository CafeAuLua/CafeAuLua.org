FROM nginx:1.15.8-alpine

RUN apk --update add npm=10.14.2-r0
RUN mkdir /root_node
COPY ./ /root_node
RUN cd /root_node && npm install && cp -R dist/* /usr/share/nginx/html
