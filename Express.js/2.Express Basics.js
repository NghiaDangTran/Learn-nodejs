const express = require('express')
const { readFileSync } = require('fs')
const app = express()
const homePage = (__dirname + "\\navbar-app" + "\\index.html")
const javaSc = (__dirname + "\\navbar-app" + "\\browser-app.js")
const logo = (__dirname + "\\navbar-app" + "\\logo.svg")
const style = (__dirname + "\\navbar-app" + "\\styles.css")
const tryeas = (__dirname + "\\public")

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
// console.log(express.static(__dirname+"\\public"))
app.use(express.static(tryeas))

app.get('/', (req, res) => {

    res.sendFile(homePage)
})

// app.get("/styles.css", (req, res) => {
//     console.log("load")
//     res.status(200).sendFile(style)

//     // try {

//     //     res.status(200).sendFile(logo)

//     // }
//     // catch (err) {
//     //     console.log(err)
//     // }
// })
// app.get("/browser-app.js", (req, res) => {

//     res.status(200).sendFile(javaSc)
// })
// // /logo.svg
// app.get("/logo.svg", (req, res) => {
//         console.log("load2")
//     res.status(200).sendFile(logo)
// })


app.all("*", (req, res) => {
    // req.header(404)
    res.status(404)
    res.send('<h1>Not Found</h1>')


})



app.listen(5000, () => {

    console.log('u are online')
}) 
