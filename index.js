const serve = require('koa-static');
const Koa = require('koa');
const fs=require('fs')
const app = new Koa();

app.use(async (ctx,next)=>{
  serve(__dirname + '/static')
  await next()
});

app.use(async ctx=>{
  let temp=`I'm raspberry pi !`
  try {
    temp= (fs.readFileSync('/sys/class/thermal/thermal_zone0/temp','utf8'))/1000+'℃'
  } catch (error) {
   console.log(error)
  }
  ctx.body=temp
})

app.listen(3000);

console.log('listening on port 3000');