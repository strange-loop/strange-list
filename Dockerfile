FROM node:7.7.2

WORKDIR /tmp
ADD package.json package.json
RUN npm i
RUN npm i -g local-web-server

WORKDIR /app
ADD . .
RUN mv /tmp/node_modules .
RUN npm run build
RUN rm -rf node_modules


# CMD npm run debug
CMD ws -d ./build -s index.html

