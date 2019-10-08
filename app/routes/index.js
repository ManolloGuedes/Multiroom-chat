module.exports = (application) => {
  application.get('/', (req, res) => {
    application.app.controller.index.index(application, req, res);
  });
};
