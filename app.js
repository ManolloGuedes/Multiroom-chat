const socket = require('socket.io');
const app = require('./config/server');

const server = app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('server is running');
});

const io = socket.listen(server);

app.set('io', io);

/* creating websocket connection */
io.on('connection', (socketConnection) => {
  // eslint-disable-next-line no-console
  console.log('user logged in');
  socketConnection.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('user logged out');
  });

  socketConnection.on('sendMessage', (data) => {
    socketConnection.emit('messageToCliente', data); // sending message to sender user
    socketConnection.broadcast.emit('messageToCliente', data); // sending message to the other users
  });
});
