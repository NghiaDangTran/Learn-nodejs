const { createReadStream } = require('fs')
const steam = createReadStream('.1/content/big.txt', { highWaterMark: 90000 })
    //default 64kb
    // 

steam.on('data', (result) => {
    console.log(result)
})

steam.on('error', (err) => {
    console.log(err)

})