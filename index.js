const serve = require('koa-static');
const Koa = require('koa');
const fs=require('fs')
const app = new Koa();

app.use(serve(__dirname + '/static'));

app.listen(80);

console.log('listening on port 80');