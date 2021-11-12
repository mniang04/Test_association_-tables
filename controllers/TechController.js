// const User = require("../models");
// const Tech = require("../models");
const models = require('../models');

module.exports = {

  // select id
  async index(req, res) {
    const { user_id } = req.params;

    const user = models.Users.findByPk(user_id, {
      include: { association: 'techs' }
    })

    return res.json(user.techs);
  },

  // create
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = models.Users.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const [tech] = models.Techs.findOrCreate({
      where: { name }
    });

    await models.addTech(tech);

    return res.json(tech);
  },

  // delete
  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = Users.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const tech = Techs.findOne({
      where: { name }
    });

    await user.removeTech(tech);

    return res.json();
  }
};
