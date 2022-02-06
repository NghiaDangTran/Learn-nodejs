const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`hello threre how are you doing `)
    } else if (req.url === '/about') {
        res.end(`here is pour short`)
    } else
        res.end(`
    <h1>oops!</h1>
    <p> we cant seem to find the page tou are looking for</p>
    <a href="/"> backhome </a>
    
    `)

})


server.listen(5000)