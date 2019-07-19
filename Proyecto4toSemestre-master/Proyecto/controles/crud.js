;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])
//let db = ''


let leer = (req, res) => {

    if (!req.query.tabla) {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Datos incompletos`
        })
    }
    let campos = req.query.campos || '*',
      tabla = req.query.tabla,
      mini = req.query.mini || [] ,
      maxi = req.query.maxi || [] /*,
      contar = req.body.contar || [],
      sumar = req.body.sumar || [],
      promedio = req.body.promedio || [],
      join1 = req.body.join1 || [],
      join2 = req.body.join2 || [],
      join3 = req.body.join3 || [],
      join4 = req.body.join4 || [],
      join5 = req.body.join5 || [],
      condicion = req.body.condicion || {},
      
      desde = req.body.desde || 0,
      hasta = req.body.hasta || 0,
      en = req.body.en || [],
      entre = req.body.entre || [] */

    let sql = [".max('d1')", ".max('d2')"]

    if (req.query.mini || req.query.maxi || req.query.avg || req.query.count || req.query.sum ) {
        db.avg('d1', 'd2').from(tabla)
        .then((resultado) => {
            return res.status(200).json({
                ok: true,
                datos: resultado,
                mensaje: `Existen ${resultado.length} regisros en la consulta`
            })
        })
        .catch((error) => {
            console.log(error)
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${error}`
            })
        })
    } else {
        db(tabla)
        /*.select(campos)
         .distinct() */
        
        /* .max()
        .count()
        .sum()
        .avg()
        .join()
        .join()
        .join()
        .join()
        .join()
        .join()
        .where(condicion)
        .whereNot()
        .whereIn(en)
        .whereNotIn()
        .whereExists()
        .whereNotExists()
        .whereBetween()
        .whereNotBetween()
        .groupBy()
        .orderBy()
        .offset(desde)
        .limit(hasta) */
    .then((resultado) => {
        if (tabla === 'users'){
            resultado.forEach(element => {
                delete element.password
            });
        }
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        console.log(error)
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })

    }

    
    
    
    
}

let insertar = (req, res) => {
    console.log(req.body);
    let tabla = req.body.tabla
    let datos = req.body.datos
    if(!req.body.returning) {
        pg(tabla).insert(datos).returning.toString()
    }
    
}

let modificar = (res, req) => {

}

let borrar = (res, req) => {

}

module.exports = {
    leer,
    insertar,
    modificar,
    borrar
}

