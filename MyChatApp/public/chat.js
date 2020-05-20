$(document).ready(() => {
    const socket = io;
    $('.chat-form').submit(e => {
        e.preventDefault();
        const value = $('.chat-input').val();
        socket.emit('chat message', value);
    });
});

socket.on('chat-message', (message) => {
    const $newChat = $(`<li class="list-group-item">${message}</li>`)
    $('#messages').append($newChat);
});

const socket = io();