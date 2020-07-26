const express = require('express');
const mongoose = require('mongoose');
const Task = require('../DB/TaskSchema');

const route = express.Router();

route.get('/', async (req, res)=>{
    const data = await Task.find();
    res.json(data)
});

route.patch('/:taskId', async (req, res)=>{
    const updatedTask = await Task.updateOne(
        {id: req.params.taskId},
        {$set: {isChecked: req.body.isChecked} }
        );
    res.json(updatedTask)
});

route.delete('/:taskId', async (req, res)=>{
    const removedTask = await Task.remove({id: req.params.taskId});
    res.json(removedTask)
});

route.post('/', async (req, res)=>{

    const {id, description, isChecked, created} = req.body;
    let task = {};
    task.id = id;
    task.description = description;
    task.isChecked = isChecked;
    task.created = created;
    let taskModel = new Task(task);
    await taskModel.save();
    res.json(taskModel)
});



module.exports = route;