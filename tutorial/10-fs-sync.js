const { readFileSync, writeFileSync } = require('fs')
    // const fs = require('fs
const first = readFileSync('C:\\Users\\Bob Dang\\Desktop\\Uni Winter 2021\\side project\\learn NodeJs\\tutorial/content/first.txt', 'utf8')
const second = readFileSync('C:\\Users\\Bob Dang\\Desktop\\Uni Winter 2021\\side project\\learn NodeJs\\tutorial/content/second.txt', 'utf8')
    // const second = readFileSync('./content/first.txt', 'utf8')


writeFileSync('C:\\Users\\Bob Dang\\Desktop\\Uni Winter 2021\\side project\\learn NodeJs\\tutorial/content/result.txt', `her hearnasjdasd${first} ${second}`, { flag: 'a' })
    // this flag is just aapeend simple to the file