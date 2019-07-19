;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])


let leerProducto = (req, res) => {
    
    
    db.select('*').from('administrador.productos')
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} registros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

let nuevoProducto = (req, res) => {
    let producto = req.body
    db('administrador.productos')
    .insert(producto).returning('id', 'descripcion', 'tiempoTatto', 'costo')
    .then(result => {
        return res.status(200).json({
            ok: true,
            datos: result,
            mensaje: 'La consulta fue exitosa'
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

let actualizarProducto = (req, res) => {
    let id = req.query.id
    
    let producto = req.body
    
    db('administrador.productos')
    .where('id',id).update(producto)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: 'Se actualizo con exito'
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

let eliminarProducto = (req, res) => {
    let id = req.body.id    
    db('administrador.productos')
    .where('id',id).del()
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            mensaje: `Se elminaron ${resultado} regisros`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

module.exports = {
    nuevoProducto,
    actualizarProducto,
    eliminarProducto,
    leerProducto
}