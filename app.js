const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://alucard:alucard2107@cantera2.ptof3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongodb,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("MongoDB Connected"))
    .catch(err=> console.log(err));

const app = express();

app.set('port', 8080);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/createGame', require('./routes/users'));
app.use('/games', require('./routes/createGame'));
app.use('/startGame', require('./routes/starGame'));
app.use('/StatusGame', require('./routes/games'));
app.use('/getWinnerGame', require('./routes/getWinner'));





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
app.listen(app.get('port'));
module.exports = app;
