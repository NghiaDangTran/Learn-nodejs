const jwt = require('jsonwebtoken')
const customError = require("../errors/custom-error")


const authen = async (req, res, next) => {
    const authHeader = req.headers.authorization


    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new customError("No token provided", 401)


    }

    const token = authHeader.split(" ")[1]

    try {
        const decode = jwt.verify(token, process.env.JWTSECRET)
        const { id, username } = decode
        req.user = { id, username }
        next()

    } catch (error) {
        throw new customError("Not authorized to access this route", 401)
    }

}

module.exports = authen