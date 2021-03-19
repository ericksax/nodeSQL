const express = require("express")
const router = express.Router()
const UserController = require("./controllers/UserController")
const AddressController = require("./controllers/AdressController")

router.post("/users", UserController.create)
router.get("/users", UserController.index)

router.post("/users/:user_id/address", AddressController.create)
router.get("/users/:user_id/address", AddressController.index)

module.exports = router