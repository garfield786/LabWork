const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { ObjectID } = require('mongodb')

const app = express()
const port = 3000

app.use(express.json())

app.post('/users', (req,res) => {
    const user = new User(req.body)
    user.save()
        .then( res.status(201).send(user) )
        .catch( res.status(400).send(error) )
})

app.get('/users', (req, res) => {
    User.find()
        .then( users => res.send(users))
        .catch( error => res.status(500).send(error))
})

app.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then( user => {
            if (!user) return res.status(404).send("User not found")
            res.send(user)
        })
        .catch( error => res.status(500).send(error))
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save()
        .then( res.status(201).send(task) )
        .catch( error =>  res.status(400).send(error) )
})

app.get('/tasks', async (req, res) => {
    try {
        res.send( await Task.find() )
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/tasks/:id', (req, res) => {
    Task.findById(req.params.id)
        .then( task => {
            if (!task) return res.status(404).send("Task not found")
            res.send(task)
        })
        .catch( error => res.status(500).send(error))
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})