const { readFile } = require('fs')

console.log('started a first task')
readFile('./content/result.txt', 'utf8', (err, result) => {


    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log("complete first task")
})

console.log("start next task")