const jwt = require('jsonwebtoken')
const unauthen = require('../errors/unauthenticated')
const authen = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new unauthen("No token provided")


    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT)

        req.user = { userID: payload.userId, name: payload.username }
        next()
    }
    catch (err) {
        throw new unauthen("authentication fail")

    }






}
module.exports = authen