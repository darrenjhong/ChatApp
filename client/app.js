var socket = io();
var array = [];

$('form').submit(function () {
  var text = $('#initials').val() +' says: '+ $('#message').val();

  socket.emit('message', text);
  $('#initials').val('');
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
  array.push(text);
});
