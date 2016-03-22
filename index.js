var options = require('./options.json');
var path = require('path');
var express = require('express');

var static = {
    path: options.publicPath ? options.publicPath : __dirname + '/www',
    options: options.serverOptions ? options.serverOptions : {},
    index: options.index ? options.index : 'index.html'
};

var app = express();

app.use(express.static(path.resolve(static.path), options.options));
app.use(function(req, res) {
    res.sendFile(path.resolve(static.path) + '/' + static.index);
});

app.all('*', function(req, res, next){
    next();
});

app.listen(options.port);

console.log('Server up at http://localhost:' + options.port);
