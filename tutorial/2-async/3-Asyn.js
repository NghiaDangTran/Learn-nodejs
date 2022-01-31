const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// 


const start = async() => {
    try {

        const first = await readFile("./tutorial/content/result.txt", "utf8")
        const second = await readFile("./tutorial/content/second.txt", "utf8")
        await writeFile("./tutorial/content/result-mind-grenade.txt", `this is the most awesom: ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }

}

start()
    // getText("./tutorial/content/result.txt").then(result => console.log(result)).catch(err => console.log(err))

// const getText = (path) => {
//     return new Promise((resolve, reject) => {


//         readFile(path, "utf8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data)
//             }



//         })
//     })
// }