const express = require('express')
const app = express()
const { products, people } = require('./data')



app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get("/api/products", (req, res) => {
    const modit = products.map
        ((i, index) => {
            const { id, desc } = i
            return { id, desc }


        })
    res.send(modit)


})
app.get("/api/products/:productID", (req, res) => {
    console.log(req.params["productID"])
    const modit = products.find((i) => {
        console.log(i.id)
        return i.id == (req.params["productID"])


    })
    console.log(modit)
    if (modit)
        res.send(modit)
    else
        res.status(400).send(`<h1>Not found</h1>`)

})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

//http://localhost:5000/api/v1/query?name=john&id=4
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProduct = [...products]

    // for (let i = 0; i < sortedProduct.length; i++) {
    //     for (let j = 0; j < sortedProduct.length - i - 1; j++) {
    //         if ((sortedProduct[j].name).localeCompare(search) == 0 && (sortedProduct[j + 1].name).localeCompare(search) == 0) {
    //             if (sortedProduct[j].name < (sortedProduct[j + 1].name)) {
    //                 let temp = sortedProduct[j]
    //                 sortedProduct[j] = sortedProduct[j + 1]
    //                 sortedProduct[j + 1] = temp
    //             }
    //         }
    //         else if ((sortedProduct[j].name).localeCompare(search) == 0 || (sortedProduct[j + 1].name).localeCompare(search) == 0) {
    //             if (sortedProduct[j] == search) {
    //                 let temp = sortedProduct[j]

    //                 sortedProduct[j] = sortedProduct[j + 1]
    //                 sortedProduct[j + 1] = temp
    //             }
    //             else{
    //                 let temp = sortedProduct[j+1]

    //                 sortedProduct[j] = sortedProduct[j + 1]
    //                 sortedProduct[j + 1] = temp
    //             }
    //         }

    //         else if ((sortedProduct[j].name).localeCompare(search) < (sortedProduct[j + 1].name).localeCompare(search)) {
    //             let temp = sortedProduct[j]
    //             sortedProduct[j] = sortedProduct[j + 1]
    //             sortedProduct[j + 1] = temp

    //         }
    //         // else if ((sortedProduct[j].name).localeCompare(search) == (sortedProduct[j + 1].name).localeCompare(search)==1) {
    //         //     if (sortedProduct[j].name < (sortedProduct[j + 1].name)) {
    //         //         let temp = sortedProduct[j]
    //         //         sortedProduct[j] = sortedProduct[j + 1]
    //         //         sortedProduct[j + 1] = temp
    //         //     }                                                                                                                                                                                                                                                                                                                                      

    //         // }

    //     }

    // }
    sortedProduct = sortedProduct.filter((predicate) => {
        return predicate.name.startsWith(search)
    })
    // console.log(sortedProduct)
    // sortedProduct.forEach(i => console.log(i.name))
    res.send(sortedProduct)
})
app.all("*", (req, res) => {
    // req.header(404)
    res.status(404)
    res.send('<h1>Not Found</h1>')


})



app.listen(5000, () => {

    console.log('u are online')
}) 
