var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const dayjs = require('dayjs')
const { createSampleData } = require('./models')
createSampleData();

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');

mongoose.connect('mongodb://localhost:27017/simple-board')

mongoose.connection.on('connected',()=>{
  console.log('MongoDB Connected')
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.formatDate = (date)=>{ // 로컬 변수 -> 이 어플리케이션 전체에서 접근 가능하다.
  return dayjs(date).format('YYYY-DD-MM HH:mm:ss')
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000!');
});

module.exports = app;
