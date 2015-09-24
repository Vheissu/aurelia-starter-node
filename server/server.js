var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var requireDir = require('require-dir');
var swig = require('swig');
var mongoose = require('mongoose');

var socketCount = 0;

var config = require('./config.js');

server.listen(process.env.PORT || config.port || 3000);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);
app.use(cookieParser());
app.use(app.router);

app.use('/jspm_packages', express.static(__dirname + '/../jspm_packages'));
app.use('/client', express.static(__dirname + '/../client'));
app.use('/assets', express.static(__dirname + '/../assets'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

io.on('connection', function(socket) {
    ++socketCount;
    console.log('A user connected.');

    socket.on('disconnect', function() {
        --socketCount;
    });
});