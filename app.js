var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var con = require('./demo_db_connection.js');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/todo',(req,res)=>{
     con.query("SELECT * FROM tasks",  (err, result)=> {
      if (err) throw err;
      res.json(result);
   });
 })
app.post('/todo', function(req, res) {
    var body = req.body;
    console.log(body);
    var sql = `INSERT INTO tasks (description , date , famileMember ) VALUES ("${body.description}","${body.date}","${body.famileMember}")`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.json('dones')
    }); 
    
});

// delete a todo
app.delete('/todo/:id', (req, res)=> {
  var _id = req.params.id;
  console.log(_id);
  var sql = `DELETE FROM tasks WHERE id = "${_id}"`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.json("deleted");
 });
});
app.get('/todos', (req, res)=> {
 con.query("SELECT * FROM famile",  (err, result)=> {
      if (err) throw err;  
      res.json(result);
   });
});

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
