
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrador.personas').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrador.personas').insert([
        {nombre1: 'Esteban', nombre2: 'Wladimir', apellido1: 'Cadena', apellido2: 'Cadena', direccion: 'Ciudadela del Ejercito', telefono: '0993950606', email: 'ewv.cadena@yavirav.edu.ec', password: '12345'}
      ]);
    });
};
