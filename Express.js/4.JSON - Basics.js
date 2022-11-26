const express = require('express')
const app = express()
const { products, people }=require('./data')



app.get('/', (req, res) => {
    res.json(products)
})

app.all("*", (req, res) => {
    // req.header(404)
    res.status(404)
    res.send('<h1>Not Found</h1>')


})



app.listen(5000, () => {

    console.log('u are online')
}) 
