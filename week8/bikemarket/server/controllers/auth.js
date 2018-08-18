const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    const { name, password } = request.body;
    User.findOne({ name })
    .then(user => {
        if (!user) throw new Error('User not found.');
        return User.validatePassword(password, user.password).then(valid => {
            if (!valid) throw new Error('Invalid password.');
            completeLogin(request, response, user);
        });
    })
    .catch(error => {    
        response.status(401).json('User/password combo not found');
    });
},
  register(request, response) {
    User.create(request.body)
      .then(user => {        
        completeLogin(request, response, user);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(500).json(errors);
      });
  },
  logout(request, response) {
    request.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },
};

function completeLogin(request, response, user) {
  
  request.session.user = user.toObject();

  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(user);
}