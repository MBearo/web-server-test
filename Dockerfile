FROM node:10.14.2
COPY . /app
WORKDIR /app
RUN npm install
CMD node index.js
EXPOSE 3000