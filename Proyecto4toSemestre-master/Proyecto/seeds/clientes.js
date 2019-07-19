
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrador.clientes').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrador.clientes').insert([
        {idPersona: '1'}
      ]);
    });
};
