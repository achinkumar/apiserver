
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public'));
// app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use('/public', express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res)
{
    res.render('api.html');
});



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/users', user.list);
app.get('/', routes.index);
app.get('/employee',routes.viewEmployee);
app.put('/employee',routes.updateEmployee);
app.post('/employee',routes.createEmployee);
app.delete('/employee',routes.deleteEmployee);
app.get('/employeeErr',routes.errorEmployee);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
