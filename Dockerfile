FROM node:10.14.2
COPY . /app
WORKDIR /app
CMD node index.js
EXPOSE 3000