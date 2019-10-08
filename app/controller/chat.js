module.exports.startChat = (application, req, res) => {
  const formData = req.body;

  req.assert('nickname', 'Name or nickname is required').notEmpty();
  req.assert('nickname', 'Name or nickname must contain between 3 and 15 characters').len(3, 15);

  const errors = req.validationErrors();

  if (errors) {
    res.render('index', { errors });
    return;
  }

  const io = application.get('io');

  io.emit('startChat', {
    nickname: formData.nickname,
    msg: 'Just joined the chat',
  });

  res.render('chat');
};
