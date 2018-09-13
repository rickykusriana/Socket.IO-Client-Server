// Init module

var socket  = require('socket.io');
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = socket.listen(server);
var port    = process.env.PORT || 3000;


// Listen to port

server.listen(port, function () {
	console.log('Server listening at port : %d', port);
});


// Connection

io.on('connection', function(socket) {


	// Create for specific room

	socket.on('room', function(room) {
        socket.join(room);
    });


	// Example get response to global (all room w/ same connection)

	socket.on('new_count_message', function(data) {
		io.sockets.emit('new_count_message', { 
			new_count_message: data.new_count_message
		});
	});


	// Example get response to specific room

	socket.on('new_message', function(data) {
		io.sockets.in(data.room)
			.emit('new_message', {
				room: data.room,
				id: data.id,
				post_id: data.post_id,
				name: data.name,
				email: data.email,
				content: data.content,
				created_at: data.created_at
			});
	});
});
