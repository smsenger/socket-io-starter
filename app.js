const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();
const http = require('http').createServer(app);
const io = socketio(http);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Chat App',
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(PORT, () => {
  console.log(`Chat is running: Listening on http://localhost:${PORT}`);
});
