const { readFileSync, writeFileSync, readFile } = require('fs')
    // const fs = require('fs

const data = readFileSync('./tutorial/content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./tutorial/content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFileSync('./tutorial/content/result-async.txt')
    })
})
console.log(data)