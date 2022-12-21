const jobSchema = require('../models/Job')
const { StatusCodes } = require('http-status-codes');
const NotFound = require('../errors/not-found')
const getALlJobs = async (req, res) => {
    console.log("hi")
    const allJob = await jobSchema.find({ createdBy: req.user.userID })
    res.status(StatusCodes.OK).json(allJob)


}

const getJob = async (req, res) => {
    const { user: { userID }, params: { id: jobID } } = req
    const job = await jobSchema.findOne({
        createdBy: userID,
        _id: jobID
    })
    if (!job) {
        throw NotFound(`No JOb with this ${jobID}`)
    }
    res.status(StatusCodes.OK).json(job)

}
const createJob = async (req, res) => {

    const job = await jobSchema.create({ ...req.body, createdBy: req.user.userID })
    res.status(StatusCodes.CREATED).json(job)
}
const updateJob = async (req, res) => {
    const { user: { userID }, params: { id: jobID } } = req

    const job = await jobSchema.findOneAndUpdate({
        createdBy: userID,
        _id: jobID
    }, { ...req.body }, { new: true, runValidators: true })

    res.status(StatusCodes.CREATED).json(job)
}
const deleteJob = async (req, res) => {
    const { user: { userID }, params: { id: jobID } } = req

    const job = await jobSchema.findOneAndRemove({
        createdBy: userID,
        _id: jobID
    })
    if (job)
        res.status(StatusCodes.CREATED).json({ msg: "delete ok" })
    else {
        throw new NotFound("no job with this id")
    }
}


module.exports = {
    getALlJobs, getJob, createJob, updateJob, deleteJob
}