const notFound = ( req, res, ) => {
    console.log("nghiasd")
    res.status(404).send('Route does not found')
}
module.exports = notFound