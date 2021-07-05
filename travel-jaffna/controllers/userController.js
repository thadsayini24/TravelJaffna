const db = require("../models");
const passport = require("../passport");

//Controllers for users, references the models and is referenced by the routes 
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .then((userModel) => res.json(userModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((userModel) => res.json(userModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const userName = req.body.userName;

    db.User.findOne({ userName: userName }, (err, user) => {
      if (err) {
        console.log("User.js post error: ", err);
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${userName}`,
        });
      } else {
        console.log(req.body)
        db.User.create(req.body)
          .then((userModel) => res.json(userModel))
          .catch((err) => res.status(422).json(err));
      }
    });
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((userModel) => res.json(userModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((userModel) => userModel.remove())
      .then((userModel) => res.json(userModel))
      .catch((err) => res.status(422).json(err));
  },

};

