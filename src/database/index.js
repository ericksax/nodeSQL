const dbConfig = require('../config/database')
const Sequelize = require('sequelize')

const User = require("../models/User")
const Address = require("../models/Address")

const connection = new Sequelize(dbConfig) 

User.init(connection)
Address.init(connection)

module.exports = connection