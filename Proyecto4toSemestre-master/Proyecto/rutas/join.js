;
const express = require('express')
let api = express.Router(),
pruebaControl = require('../controles/prueba')

api.post('/nuevoProducto', pruebaControl.nuevoProducto)
api.post('/actualizarProducto', pruebaControl.actualizarProducto)
api.post('/eliminarProducto', pruebaControl.eliminarProducto)
api.get('/leerProducto', pruebaControl.leerProducto)



module.exports = api