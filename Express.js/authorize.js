const authorize = (req, res, next) => {
    console.log('authorzie')
    const { user } = req.query

    if (user === "john") {
        req.user = { name: "john alreadi" }
        next()
    }
    else {
        res.send("unauthorize")
    }
}

module.exports = authorize