const express = require('express')
const routeJob = express.Router()
const { getALlJobs, getJob, createJob, updateJob, deleteJob } = require('../controllers/jobs')
const auth = require('../middleware/authentication')

routeJob.route("/").post(createJob).get(getALlJobs)
routeJob.route("/:id").get(getJob).delete(deleteJob).patch(updateJob)



module.exports = routeJob