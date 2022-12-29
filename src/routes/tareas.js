const express = require("express")
const tareaSchema = require('../models/tareas')
const cors = require('cors')
const router = express.Router()

router.use(cors())

//Crear Tarea
router.post('/tareas', (req, res) => {
    const tarea = tareaSchema(req.body)
    tarea
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.get('/tareas', (req, res) => {
    tareaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.get('/tareas/:id', (req, res) => {
    const { id } = req.params
    tareaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.put('/tareas/:id', (req, res) => {
    const { id } = req.params
    const { Tarea,Estado, Fecha } = req.body
    tareaSchema
        .updateOne({ _id: id }, { $set: { Tarea,Estado, Fecha } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.delete('/tareas/:id', (req, res) => {
    const { id } = req.params
    tareaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router