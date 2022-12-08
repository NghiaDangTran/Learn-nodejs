/** @type {import("mongoose").Model} */

const Task = require('../models/task')
const asyncWrapper = require("../middleware/async")
const { CustomErr } = require("../erros/custom-error")
const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({})
    res.status(201).json({ tasks })
    // res.send("asdsad")

})

const createTask = async (req, res) => {
    try {

        const task = await Task.create(req.body)

        res.status(201).json({ task })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ msg: err })
    }


}
const getTask = asyncWrapper(async (req, res, next) => {

    // res.json({ id: req.params.id })
    // 638ae20fb1f2d4268c6a0f7b

    // const task = await Task.find({ _id: req.params.id })
    // const task = await Task.findOne({ _id: req.params.id })
    // const task1=await Task. 

    const task = await Task.findById(req.params.id)
    // console.log(task)
    if (!task) {
        const error = CustomErr("not found",404)
        return next(error)
        return res.status(404).json({ msg: "No Task with that id" })
    }
    res.status(200).json({ task })

})
const updateTask = async (req, res) => {
    try {
        // const task = await Task.find({ _id: req.params.id })
        // const task = await Task.findOne({ _id: req.params.id })
        console.log(req.body)
        // const task = await Task.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name, completed: req.body.completed })
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        // console.log(task)
        if (!task) return res.status(404).json({ msg: "No Task with that id" })

        res.status(200).json({ task })

    }
    catch (err) {
        res.status(500).json({ msg: err })
    }

}
const deleteTask = async (req, res) => {

    try {
        // const task = await Task.find({ _id: req.params.id })
        // const task = await Task.findOne({ _id: req.params.id })
        const task = await Task.findOneAndDelete({ _id: req.params.id })
        // console.log(task)
        if (!task) return res.status(404).json({ msg: "No Task with that id" })

        res.status(200).json({ task })

    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
}

module.exports = {
    getAllTasks
    , createTask, getTask, updateTask, deleteTask
}
