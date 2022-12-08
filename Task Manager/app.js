
const express = require('express')
const app = express()
const port = 3000
const task = require('./routes/router')
const connectDB = require('./db/connect')
const tryeas = (__dirname + "\\public")
const notFound = require("./middleware/notfound")
const errorHandle = require('./middleware/error_handel')
require('dotenv').config();

//middleware

app.use(express.json())

app.use(express.static(tryeas))
//router
app.use('/api/v1/tasks', task)
app.use(notFound)
app.use(errorHandle)
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(() => { console.log("connected to db") })
        app.listen(port, () => {
            console.log("hello")
        })
    }
    catch (err) {
        console.log(err)
    }

}

start()
