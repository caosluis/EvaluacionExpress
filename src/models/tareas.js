const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema(
    {
        Tarea: {
            type: String,
        },
        Estado: {
            type: String,
            default: 'No Realizado'
        },
        Fecha: {
            type: Date
        }
    }
)
module.exports = mongoose.model('Tarea', tareaSchema)