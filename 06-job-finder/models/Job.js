const mongoose = require('mongoose')


const JobSchema = new mongoose.Schema({

    company: { type: String, required: [true, 'Need comapny name'] ,unique: true},
    position: { type: String, required: [true, 'Need position'] },
    status: { type: String, enum: ['interview', 'declined', 'pending'], default: "pending" },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User', required: [true, 'provide user'] },

}, { timestamps: true })

JobSchema.methods.createJob = async function (company, position, status = null, createdBy) {

    this.company = company
    this.position = position
    if (status)
        this.status = status
    this.createdBy = createdBy
}
module.exports = mongoose.model('Job', JobSchema)