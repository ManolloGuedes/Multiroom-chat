const socket = require('socket.io');
const app = require('./config/server');

const server = app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('server is running');
});

socket.listen(server);
