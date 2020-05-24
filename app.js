const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 8000;

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
    console.log('message: ' + msg);
  });
});

// io.on('connection', (socket) => {
//   console.log('a user connected');

io.on('disconnect', () => {
  console.log('user disconnected');
});

http.listen(PORT, () => {
  console.log(`Chat is running: Listening on http://localhost:${PORT}`);
});
