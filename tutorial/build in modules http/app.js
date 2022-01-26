const http = require('http');


const port = 5000;
// hostname ip which is associated with any device connected to a computer network
const hostname = '24.77.140.168'; // local host



// call back funciton to be execured when a user makes a request to our server
const respond = (request, respond) => {
    console.log(request);

};

// create a server
const server = http.createServer(respond);;
server.listen(port, hostname, () => { console.log('lising on port ${port}, hostnam:${hostname} }') });