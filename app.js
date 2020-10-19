const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('./config');
const path = require('path')
const app = express();

// 准备session存放的仓库
var store = new MongoDBStore({
  uri: `mongodb://${config.db_host}:${config.db_port}/${config.db_name}`,
  collection: 'sessions'
});
// Catch errors
store.on('error', function(error) {
  console.log(error);
});
app.use(require('express-session')({
  secret: 'This is a secret',
  name: 'SESSIONID',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));

app.use(express.urlencoded());
app.use(express.json());

// 打包上传服务器


app.use('/pc/static',express.static(path.join(__dirname,'./www')))

app.use('/pc/api/user', require('./routers/userRouter'));
app.use('/pc/api/goods',require('./routers/goodsRouter'));
app.use('/pc/api/shopcart',require('./routers/shopcartRouter'));

// app
app.use('/app/static',express.static(path.join(__dirname,'./wwwApp')))
app.use('/app/api/user', require('./routers/userRouter'));
app.use('/app/api/goods',require('./routers/goodsRouter'));
app.use('/app/api/shopcart',require('./routers/shopcartRouter'));

// 对于不能匹配的路径，统一的响应html文件，前端使用的是history模式，刷新需要响应html页面，html页面加载js完之后，路由才起作用
app.use('/pc',(req,res)=>{
  res.sendFile(path.join(__dirname,'./www/index.html'))
})
app.use('/app',(req,res)=>{
  res.sendFile(path.join(__dirname,'./wwwApp/index.html'))
})
module.exports = app;





 

 
