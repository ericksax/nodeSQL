const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
  async create (req, res) {
    const { userId } = req.params
    const { name } = req.body

    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(400).json({ error: 'User dos not exists' })
    }

    const [tech] = await Tech.findOrCreate({
      where: { name }
    })

    await user.addTech(tech)

    return res.json(tech)
  },

  async index (req, res) {
    const { userId } = req.params

    const user = await User.findByPk(userId, {
      include: {
        association: 'techs',
        attributes: ['name'],
        through: { attributes: [] }
      }
    })

    if (!user) {
      return res.status(400).json({ err: 'user not found' })
    }

    return res.json(user.techs)
  }
}
