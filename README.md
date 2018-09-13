# Socket.IO-Client-Server
Example combine Socket.IO with CodeIgniter


<br/>

- Sent to server

<pre>
<code>
var socket = io.connect('http://'+window.location.hostname+':3000' );

socket.emit('new_message', {
	room: '<?=base_url();?>',
	id: data.id,
	post_id: data.post_id,
	name: data.name,
	email: data.email,
	content: data.content,
	created_at: data.created_at
});
</code>
</pre>


- Get from server

<pre>
<code>
var socket = io.connect('http://'+window.location.hostname+':3000');


// Init room, will get response from only room

socket.on('connect', function() {
	socket.emit('room', '<?=base_url();?>');
});


// Display the response

socket.on('new_message', function(data) {
	console.log(data);
});
<code>
</pre>
