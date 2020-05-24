$(document).ready(() => {
  const socket = io();
});   

$(function () {
  var socket = io();
  $('form').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', $('#chat-message').val());
    $('#chat-message').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
});

