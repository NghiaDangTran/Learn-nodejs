// second lessosn
const os = require('os');
const { uptime } = require('process');
// info about curr user
// const user = os.userInfo();
console.log(user);
// mmethod returns the system uptime in seconds
console.log(`the system up is ${os.uptime()/100/60}`)
const currentOs = { name: os.type(), release: os.release(), totalMem: os.totalmem(), freemem: os.freemem() }

// console.log(currentOs)