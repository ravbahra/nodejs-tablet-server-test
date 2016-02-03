var app = require('express')();
var http = require('http').Server(app);
var socketio = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send('<p>HELLLLLOOasdasdOOOOOOOOOOOO</p>');
});


http.listen(80, function () {
    console.log('listening on *:3000');

});