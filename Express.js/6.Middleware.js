const express = require('express')
const app = express()
const authorize=require(__dirname+'\\authorize')
// req=>middleware=>res

const logger = (req, res, next) => {
  
    const method = (req).method
    const url = (req).url
    const time = new Date().getFullYear()
    // res.send("ok")
    next()
}
// every middle ware need to pass to the next()
// app.use(logger)
// app.use('/api', logger)
//this will apply to all route start with /api/home
app.use([logger,authorize])
app.get('/', (req, res) => {

    res.send("Home")
})

app.get('/about', (req, res) => {

    res.send("About")
})





app.listen(5000, () => {

    console.log('u are online')
}) 
