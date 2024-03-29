const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// database
const connectionString = ""
const mongoDbUri = process.env.MONGODB_URI || connectionString;

async function main() {
  await mongoose.connect(mongoDbUri);
}
main().then(() => console.log('dbconnected')).catch((err) => console.log(err))

// link bootstrap
app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404')
});

module.exports = app;
