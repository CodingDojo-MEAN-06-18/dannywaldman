const User = require('../models/user');

module.exports = {
  battle: (req, res, next) => {
    let user1 = req.body.user1;
    let user2 = req.body.user2;

    User.find({ 'name': user1.name }, (err, data) => {
      if (data.length === 0) {
        User.create(user1).catch(err => console.log(err));
      }
    })

    User.find({ 'name': user2.name }, (err, data) => {
      if (data.length === 0) {
        User.create(user2).catch(err => console.log(err));
      }
    })

    res.json({ 'user1': user1, 'usezr2': user2 });
  },
  fetch: (req, res, next) => {
      User.find({}).sort('-score')
          .then(users => res.json(users))
          .catch(error => res.json(error));
  }
};

