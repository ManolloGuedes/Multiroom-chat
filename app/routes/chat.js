module.exports = (application) => {
  application.post('/chat', (req, res) => {
    application.app.controller.chat.startChat(application, req, res);
  });

  application.get('/chat', (req, res) => {
    application.app.controller.chat.startChat(application, req, res);
  });
};
