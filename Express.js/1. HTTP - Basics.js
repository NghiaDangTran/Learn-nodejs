const http = require('http')
const { readFileSync } = require('fs')
//get all file
console.log(__dirname + "\\index.html")
const homePage = readFileSync(__dirname + "\\navbar-app" + "\\index.html")
const javaSc = readFileSync(__dirname + "\\navbar-app" + "\\browser-app.js")
const logo = readFileSync(__dirname + "\\navbar-app" + "\\logo.svg")
const style = readFileSync(__dirname + "\\navbar-app" + "\\styles.css")

const server = http.createServer((req, res) => {
    console.log('User go to 5000')
    let url = req.url
    if (url === '/') {
        // res.writeHead(200, { 'content-type': 'text/javascript' })
        // // res.write("")
        // res.write(javaSc)
        // res.writeHead(200, { 'content-type': 'text/svg+xml' })
        // res.write(logo)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        // res.writeHead(200, { 'content-type': 'text/css' })
        // res.write(style)

        // console.log(req.url)
        res.end()

    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(style)

        console.log(req.url)
        res.end()

    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        // res.write("")
        res.write(javaSc)
        res.end()

    }
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'text/svg+xml' })
        res.write(logo)
        console.log(req.url)
        res.end()

    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write("")
        res.write("<h1>wrong path</h1>")
        console.log(req.url)
        res.end()
    }

})

server.listen(5000)