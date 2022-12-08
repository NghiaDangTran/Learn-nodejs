const { CustomAPIError } = require("../erros/custom-error")
const errorHandle = (err, req, res, next) => {
    if (err instanceof CustomAPIError)
        return res.status(err.statusCpde).json({ msg: err.message })

    return res.status(500).json({ err })
}

module.exports = errorHandle