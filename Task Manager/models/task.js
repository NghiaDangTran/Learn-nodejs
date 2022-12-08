/**
 * @typedef {object} DestructuredModel
 * @property {object} models
 * @property {import("mongoose").Model} models.Note
 */
/** @type {DestructuredModel} */
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [20, "name must under 20 chrater"]
    },
    completed: {
        type: Boolean,
        default: false
    },


})
module.exports = mongoose.model('Task', TaskSchema)