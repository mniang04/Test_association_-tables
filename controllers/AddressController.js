const models = require("../models");


module.exports = {

  // Get Address
  async index(req, res) {
    const { user_id } = req.params;

    models.Users.findByPk(user_id, {
      include: { association: 'addresses' },
    })
      .then(function (allAddresse) {
        if (allAddresse) {
          res.status(200).json(allAddresse);
        } else {
          res.status(404).json({ "error": "no users found" })
        }
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).json({ "error": "invalid fields" })
      })
  },

  // Create Address
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = models.Users.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    const address = models.Adresses.create({
      zipcode,
      street,
      number,
      user_id
    })
      .then(function (newAdresses) {
        if (newAdresses) {
          res.status(200).json(newAdresses);
        } else {
          res.status(404).json({ "error": "cannot add user" })
        }
      })
  },
};