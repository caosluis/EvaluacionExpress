const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const tareaRoutes = require('./routes/tareas.js')

const app = express()
const port = 9000

app.use(express.json())
app.use('/api', tareaRoutes)

app.get('/', (req, res) => {
    res.send("APP Prueba 360")
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado con MongoDB Atlas"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log('server listening port', port))