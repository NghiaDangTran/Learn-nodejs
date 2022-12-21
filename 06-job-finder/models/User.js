require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')


const manyvalidators = [
    { validator: (s) => { return s && s.length >= 5; }, msg: 'Is too short' },
    {
        validator: (s) => {
            var myRegxp = /^[a-zA-Z]+$/i;
            return myRegxp.test(s);
        }, msg: 'Only Letters'
    }
]


const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please enter your name"], maxlength: 50 },
    email: { type: String, required: [true, "Please enter your email"], maxlength: 50, match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/], unique: true, },
    password: { type: String, required: [true, "Please enter your password"], validate: manyvalidators },
})


UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


// UserSchema.method('getname', () => { return this.name })
UserSchema.methods.getname = function () { return this.name }
UserSchema.methods.createJWT = function () {


    return { UserName: this.name, token: jwt.sign({ userId: this._id, username: this.name }, process.env.JWT, { expiresIn: '30d' }) }
}
UserSchema.methods.comparePassword = async function (check) {

    const isMatch = await bcrypt.compare(check, this.password)


    return isMatch
}
module.exports = mongoose.model('user', UserSchema)