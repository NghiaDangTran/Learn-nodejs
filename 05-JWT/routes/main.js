const express = require('express')
const route = express.Router()
let {
    login, dashboard
} = require('../controllers/main')
const authen = require("../middleware/auth")

route.route('/dashboard').get(authen, dashboard)
route.route('/login').post(login)

module.exports = route

