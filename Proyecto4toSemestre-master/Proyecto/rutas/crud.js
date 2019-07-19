;
const express = require('express')
let api = express.Router(),
  crudControl = require('../controles/crud')

api.get('/leer', crudControl.leer)
api.get('/leer/:id', crudControl.leer)
api.post('/guardar', crudControl.insertar)

module.exports = api