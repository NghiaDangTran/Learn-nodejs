
//check username, password in post(login) request
// if exiist rcerate new JWT
// send back to front end
// 
//setu authentication so only the request with JWT can asscess the dashboard
require('dotenv').config()
const customError = require("../errors/custom-error")
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    // console.log(req.user)


    const { username, password } = req.body
    if (!username || !password) {
        console.log("notok")
        throw new customError("missing username or password", 400)
    }
    // only for demo
    const id = new Date().getDate()




    //try to keep payload small,better ux
    //mongo validation
    //Joi check password
    // check in the controller

    const token = jwt.sign({ id, username }, process.env.JWTSECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: "User Created", token })
}

const dashboard = async (req, res, next) => {
    // const authHeader = req.headers.authorization


    // if (!authHeader || !authHeader.startsWith('Bearer')) {
    //     throw new customError("No token provided", 401)


    // }

    // const token = authHeader.split(" ")[1]

    // try {
    //     const decode = jwt.verify(token, process.env.JWTSECRET)
    //     const Luck = Math.floor(Math.random() * 100)
    //     res.status(200).json({ 'msg': `Hello, ${decode.username}`, secret: `Here is your data ${Luck}` })
    // } catch (error) {
    //     throw new customError("Not authorized to access this route", 401)
    // }
    const { id, username } = req.user

    const Luck = Math.floor(Math.random() * 100)
    res.status(200).json({ 'msg': `Hello, ${username}`, secret: `Here is your data ${Luck}` })

}




module.exports = {
    login, dashboard
}