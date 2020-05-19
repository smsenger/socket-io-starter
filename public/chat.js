$(document).ready(() => {
  var socket = io();
  const $form = $('.chat-form');
  const $messages = $('#messages');

  $('.chat-form').submit(function (e) {
    e.preventDefault();
    socket.emit('chat message', $('.chat-input').val());
    $('.chat-input').val('');
  });

  socket.on('chat message', function (msg) {
    $messages.children().last().removeClass('text-success');
    $newMessage = $(`<li class="list-group-item text-success">${msg}</li>`);
    $messages.append($newMessage);
    $('#messages').animate({ scrollTop: $messages.prop('scrollHeight') }, 200);
  });
});
