const User = require('../models/User')
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, UnauthenticatedError } = require("../errors")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    // exmaple check can do in here
    // const { name, email, password } = req.body
    // if (!name || !email || !password) {
    //     throw new BadRequestError("Missing something")
    // }
    const user = await User.create({ ...req.body })


    res.status(StatusCodes.CREATED).json(user.createJWT())

}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError("missing email or password")
    }
    const user = await User.findOne({ email })

    if (!user) {
        throw new UnauthenticatedError("no such user")
    }
    const check = await user.comparePassword(password)
    if (!check) {

        throw new UnauthenticatedError("wrong pass ***")
    }


    res.status(StatusCodes.OK).json(user.createJWT())
}

module.exports = {
    register, login
}