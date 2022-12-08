class CustomAPIError extends Error {

    constructor(mes, status) {
        super(mes)
        this.statusCpde = status

    }
}


const CustomErr = (msf, statusCode) => {

    return new CustomAPIError(msf, statusCode)
}

module.exports= {CustomErr,CustomAPIError}