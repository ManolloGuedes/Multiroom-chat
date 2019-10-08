const app = require('./config/server');

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('server is running');
});
