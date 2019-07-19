
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrador.empleados').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrador.empleados').insert([
        {idPersona: '1', idRol: '1'}
      ]);
    });
};
