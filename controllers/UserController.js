const models = require('../models');

module.exports = {

  // Create Users
  async index(req, res) {
    models.Users.findAll()
      .then(function (allUsers) {
        if (allUsers) {
          res.status(200).json(allUsers);
        } else {
          res.status(404).json({ "error": "no users found" })
        }
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).json({ "error": "invalid fields" })
      })
  },

  // Get Users
  async store(req, res) {
    const { name, email } = req.body;

    const user = models.Users.create({
      name,
      email
    })
      .then(function (newUser) {
        if (newUser) {
          res.status(200).json(newUser);
        } else {
          res.status(404).json({ "error": "cannot add user" })
        }
      })
  }
};