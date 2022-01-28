const http = require('http')
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('home page')
    }
    if (req.url === '/about') {
        // blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(j, i)
            }
        }
        res.end("About Page")
    }
    res.end('Erorr Page')
})



server.listen(5000, () => {
    console.log('server listeing on port:5000')
})

/// seting ur code Asynchronous