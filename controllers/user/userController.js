const User = require('../../models/user/user');

const createUser = (req, res) => { 
    var newuser = new User(req.body);
    newuser.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }
        res.json(user); 
    });
};

const getUsers = (req, res) => {
  User.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

module.exports = {
    createUser,
    getUsers
}